import re
import os

def replace_in_file(filepath, pattern, replacement, flags=0):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    new_content = re.sub(pattern, replacement, content, flags=flags)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

# 1. AreaStreamGraph.tsx
path = "src/components/charts/AreaStreamGraph.tsx"
replace_in_file(path, r"pathRef\.current\?\.getTotalLength\(\)", "(pathRef.current as SVGPathElement)?.getTotalLength()")

# 2. BeeswarmPlot.tsx
path = "src/components/charts/BeeswarmPlot.tsx"
replace_in_file(path, r"d\.datum", "(d as any).datum")
replace_in_file(path, r"\(d\.x \+ padding\)", "((d.x || 0) + padding)")
replace_in_file(path, r"d\.x,", "(d.x || 0),")

# 3. ConsistencyBoxPlot.tsx
path = "src/components/charts/ConsistencyBoxPlot.tsx"
replace_in_file(path, r"d\.values\.map\(\(v\)", "(d as any).values.map((v: any)")
replace_in_file(path, r"\(v as NumberValue\)", "(v as any)")
replace_in_file(path, r"\(v\)", "(v: any)")

# 4. ForceGraph.tsx
path = "src/components/charts/ForceGraph.tsx"
replace_in_file(path, r"const nodeMap = new Map", "// const nodeMap = new Map")
replace_in_file(path, r"nodes\.map\(\(n\)", "(nodes as any[]).map((n)")

# 5. StudyTreemap.tsx
path = "src/components/charts/StudyTreemap.tsx"
replace_in_file(path, r"d3\.hierarchy\(\{ children: data \}\)", "d3.hierarchy({ children: data } as any)")
replace_in_file(path, r"const colorScale = d3\.scaleOrdinal", "// const colorScale = d3.scaleOrdinal")

# 6. SunburstChart.tsx
path = "src/components/charts/SunburstChart.tsx"
replace_in_file(path, r"d3\.hierarchy\(\{ children: data \}\)", "d3.hierarchy({ name: 'root', children: data } as any)")
replace_in_file(path, r"root\.descendants\(\)\.slice\(1\)", "(root as any).descendants().slice(1)")
replace_in_file(path, r"d: SunburstNode", "d: any")
replace_in_file(path, r"d => {", "_d => {")
replace_in_file(path, r"\(d\) => \{", "(_d: any) => {")

# 7. TrendLineChart.tsx
path = "src/components/charts/TrendLineChart.tsx"
replace_in_file(path, r"const dates = ", "// const dates = ")
replace_in_file(path, r"const moveTooltip = ", "// const moveTooltip = ")
replace_in_file(path, r"d\.key", "(d as any).key")
replace_in_file(path, r"const label = ", "// const label = ")
replace_in_file(path, r"const hoverZone = ", "// const hoverZone = ")

# 8. stats.ts
path = "src/lib/stats.ts"
replace_in_file(path, r"c\.timeSpentHistory", "(c as any).timeSpentHistory")

# 9. Other unused vars
path = "src/components/charts/DersScatterPlot.tsx"
replace_in_file(path, r"\(d\) => \{", "(_d: any) => {")
replace_in_file(path, r"d => \{", "_d => {")

path = "src/components/charts/GaugeChart.tsx"
replace_in_file(path, r"color,", "_color,")
replace_in_file(path, r"const nx = ", "// const nx = ")
replace_in_file(path, r"const ny = ", "// const ny = ")

path = "src/components/charts/MarimekkoChart.tsx"
replace_in_file(path, r"b,", "_b,")

path = "src/components/charts/TimeHistogram.tsx"
replace_in_file(path, r"const mean = ", "// const mean = ")

path = "src/components/charts/WaterfallChart.tsx"
replace_in_file(path, r"b,", "_b,")

path = "src/components/StatisticsView.tsx"
replace_in_file(path, r"OverviewStats,", "")
