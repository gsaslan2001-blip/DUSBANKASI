/**
 * Export Modal — İstatistik dışa aktarma (PDF/CSV/Paylaş)
 */
import { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FilePdf, FileCsv, Share, X } from '@phosphor-icons/react';
import { Button } from '../ui/Button';
import type { Theme } from '../../theme';
import { useModalA11y } from '../../hooks/useModalA11y';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  theme: Theme;
  onExportPDF: () => void;
  onExportCSV: () => void;
  onShare: () => void;
}

export default memo(ExportModal);

function ExportModal({ isOpen, onClose, theme, onExportPDF, onExportCSV, onShare }: Props) {
  const [exporting, setExporting] = useState<string | null>(null);
  const dialogRef = useModalA11y<HTMLDivElement>(onClose, isOpen);

  const handleExport = async (type: string, fn: () => void) => {
    setExporting(type);
    await new Promise(r => setTimeout(r, 600));
    fn();
    setExporting(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed', inset: 0, zIndex: 100,
            background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
          onClick={onClose}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="Dışa Aktar"
            tabIndex={-1}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className={theme.card}
            style={{ padding: 24, borderRadius: 20, maxWidth: 400, width: '90%' }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: theme.text }}>Dışa Aktar</span>
              <Button
                onClick={onClose}
                variant="unstyled"
                aria-label="Kapat"
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: theme.subtext }}
              >
                <X size={20} />
              </Button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Button
                onClick={() => handleExport('pdf', onExportPDF)}
                disabled={exporting !== null}
                variant="unstyled"
                style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: 14, borderRadius: 12,
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                  cursor: 'pointer', opacity: exporting ? 0.5 : 1, width: '100%',
                }}
              >
                <FilePdf size={24} color="#f87171" weight="fill" />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: theme.text }}>PDF Olarak Kaydet</div>
                  <div style={{ fontSize: 11, color: theme.subtext }}>Yazdırılabilir rapor formatı</div>
                </div>
                {exporting === 'pdf' && <span style={{ marginLeft: 'auto', fontSize: 11, color: theme.subtext }}>Hazırlanıyor...</span>}
              </Button>

              <Button
                onClick={() => handleExport('csv', onExportCSV)}
                disabled={exporting !== null}
                variant="unstyled"
                style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: 14, borderRadius: 12,
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                  cursor: 'pointer', opacity: exporting ? 0.5 : 1, width: '100%',
                }}
              >
                <FileCsv size={24} color="#34d399" weight="fill" />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: theme.text }}>CSV Dışa Aktar</div>
                  <div style={{ fontSize: 11, color: theme.subtext }}>Excel / Sheets ile açılabilir</div>
                </div>
                {exporting === 'csv' && <span style={{ marginLeft: 'auto', fontSize: 11, color: theme.subtext }}>Hazırlanıyor...</span>}
              </Button>

              <Button
                onClick={() => handleExport('share', onShare)}
                disabled={exporting !== null}
                variant="unstyled"
                style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: 14, borderRadius: 12,
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                  cursor: 'pointer', opacity: exporting ? 0.5 : 1, width: '100%',
                }}
              >
                <Share size={24} color="#60a5fa" weight="fill" />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: theme.text }}>Özeti Kopyala</div>
                  <div style={{ fontSize: 11, color: theme.subtext }}>Panoya metin olarak kopyala</div>
                </div>
                {exporting === 'share' && <span style={{ marginLeft: 'auto', fontSize: 11, color: theme.subtext }}>Kopyalanıyor...</span>}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
