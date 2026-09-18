import importlib.util
import tempfile
import unittest
from pathlib import Path


MODULE_PATH = Path(__file__).with_name("notebooklm_infographic_queue.py")
SPEC = importlib.util.spec_from_file_location("notebooklm_infographic_queue", MODULE_PATH)
module = importlib.util.module_from_spec(SPEC)
assert SPEC and SPEC.loader
SPEC.loader.exec_module(module)


class InfographicQueueTests(unittest.TestCase):
    def test_topic_keys_are_unique(self):
        keys = [module.topic_key(topic) for topic in module.TOPICS]
        self.assertEqual(len(keys), len(set(keys)))

    def test_render_prompt_replaces_only_focus_topic(self):
        rendered = module.render_prompt("baş\n__ODAK_KONU__\nson", "Ürtiker")
        self.assertEqual(rendered, "baş\nÜrtiker\nson")
        self.assertNotIn("__ODAK_KONU__", rendered)

    def test_rate_limit_detection(self):
        self.assertTrue(module.is_quota_error("Rate limited — API error (code 8)"))
        self.assertTrue(module.is_quota_error("RESOURCE EXHAUSTED"))
        self.assertFalse(module.is_quota_error("Authentication expired"))

    def test_checkpoint_does_not_requeue_inflight_or_completed(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "state.json"
            state = module.load_state(path, module.DEFAULT_NOTEBOOK_ID)
            entries = sorted(state["topics"].values(), key=lambda item: item["position"])
            entries[0]["status"] = "inflight"
            entries[1]["status"] = "completed"
            queue = module.pending_entries(state)
            queued_topics = {entry["topic"] for entry in queue}
            self.assertNotIn(entries[0]["topic"], queued_topics)
            self.assertNotIn(entries[1]["topic"], queued_topics)
            self.assertEqual(len(queue), len(module.TOPICS) - 2)


if __name__ == "__main__":
    unittest.main()
