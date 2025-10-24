import { TerminalBackButton } from '@/components/ui/terminal-back-button'
import { ToolItem } from '@/components/ui/tool-item'

export default function ToolsPage() {
  return (
    <div className="w-full space-y-12">
      <div>
        <h1 className="text-style-header-main mb-2">Tools</h1>
        <p className="text-style-body-italic">Things I am using</p>
      </div>

      {/* Hardware Section */}
      <section className="space-y-4">
        <h2 className="text-style-subheader-main">Hardware</h2>
        <div className="space-y-2">
          <ToolItem title="Laptop" description="Macbook Pro 13 M1" level={1} />
          <ToolItem
            title="Mouse"
            description="Logitech MX Master 3"
            level={1}
          />
          <ToolItem
            title="Keyboard"
            description="Logitech MX Keys mini"
            level={1}
          />
          <ToolItem
            title="Monitor"
            description="BenQ PD2700U 27 / MSI G274QPX 27"
            level={1}
          />
          <ToolItem title="Chair" description="Steelcase Amia 2013" level={1} />
          <ToolItem
            title="Headphones"
            description="Apple AirPods Pro"
            level={1}
          />
          <ToolItem
            title="Lighting"
            description="Quntis Monitor Lamp"
            level={1}
          />
        </div>
      </section>

      {/* Development Section */}
      <section className="space-y-4">
        <h2 className="text-style-subheader-main">Development</h2>
        <div className="space-y-2">
          <ToolItem
            title="Cursor"
            description="My primary code editor"
            level={1}
          />

          <ToolItem
            title="Fonts"
            description="JetBrains Mono / Fira Code"
            level={1}
          />
          <ToolItem
            title="Theme"
            description="xpcode dark / Vitesse light"
            level={1}
          />
          <ToolItem
            title="Icon Theme"
            description="Catppuccin icons"
            level={1}
          />
          <ToolItem
            title="Product Icons"
            description="Carbon icons"
            level={1}
          />
          <ToolItem
            title="Formatting & Linting"
            description="Prettier & ESLint"
            level={1}
          />
          <ToolItem
            title="Git"
            description="Version control system"
            level={1}
          />
          <ToolItem title="Terminal & Shell" description="zsh" level={1} />
          <ToolItem title="pnpm" description="Package manager" level={1} />
        </div>
      </section>

      {/* Browser Section */}
      <section className="space-y-4">
        <h2 className="text-style-subheader-main">Browser</h2>
        <div className="space-y-2">
          <ToolItem
            title="FireFox"
            description="My preferred web browser"
            level={1}
          />
          <ToolItem title="Browser Extensions" level={1}>
            <ToolItem
              title="uBlock Origin"
              description="Ad blocker"
              level={2}
            />
            <ToolItem
              title="Privacy Badger"
              description="Privacy protection"
              level={2}
            />
            <ToolItem
              title="Refined GitHub"
              description="GitHub improvements"
              level={2}
            />
            <ToolItem
              title="File Icons for GitHub and GitLab"
              description="Why is this not a default feature?"
              level={2}
            />
            <ToolItem
              title="Refined YouTube"
              description="YouTube improvements"
              level={2}
            />
            <ToolItem
              title="React Developer Tools"
              description="Debugging web apps"
              level={2}
            />
            <ToolItem
              title="Theme"
              description="Dark Purple Firefox Theme"
              level={2}
            />
          </ToolItem>
        </div>
      </section>

      {/* Productivity Section */}
      <section className="space-y-4">
        <h2 className="text-style-subheader-main">Productivity</h2>
        <div className="space-y-2">
          <ToolItem title="Kap" description="Screen recorder" level={1} />
          <ToolItem
            title="ClickUp"
            description="Task management & collaboration"
            level={1}
          />
          <ToolItem
            title="GitHub Desktop"
            description="Better GitHub experience"
            level={1}
          />
          <ToolItem
            title="Google Calendar"
            description="Calendar and scheduling"
            level={1}
          />
          <ToolItem
            title="Claude code"
            description="My preferred AI agent"
            level={1}
          />
          <ToolItem title="Mobbin" description="Design inspiration" level={1} />
        </div>
      </section>
      <TerminalBackButton />
    </div>
  )
}
