"use client"

import { GlobePulse } from "@/components/ui/cobe-globe-pulse"

export default function DemoGlobePulse() {
  return (
    <div style={{ minHeight: "100vh", background: "#000", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
      <div style={{ width: "100%", maxWidth: "600px" }}>
        <GlobePulse
          speed={0.003}
          markers={[
            { id: "pulse-1", location: [51.51, -0.13], delay: 0 },
            { id: "pulse-2", location: [40.71, -74.01], delay: 0.5 },
            { id: "pulse-3", location: [35.68, 139.65], delay: 1 },
            { id: "pulse-4", location: [-33.87, 151.21], delay: 1.5 },
          ]}
        />
      </div>
    </div>
  )
}