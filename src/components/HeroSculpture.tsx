import * as React from "react"
import SculptureHero from "@/components/ui/liquid-sculpture-hero"

type Theme = "light" | "dark"

interface Props {
  imageSrc: string
  name: string
  role: string
  location: string
}

// Same palette as global.css, per theme
const COLORS = {
  light: { bg: "#f2f5ec", text: "#15221e", accent: "#4f6a24" },
  dark: { bg: "#0d1b1e", text: "#eef3ec", accent: "#b9d077" },
}

function readTheme(): Theme {
  const t = document.documentElement.dataset.theme
  if (t === "light" || t === "dark") return t
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

/** Full-screen liquid hero, kept in sync with the site's theme switch. */
export default function HeroSculpture({ imageSrc, name, role, location }: Props) {
  const [theme, setTheme] = React.useState<Theme>("light")

  React.useEffect(() => {
    const sync = () => setTheme(readTheme())
    sync()
    // the sidebar toggle writes data-theme on <html>; follow it
    const mo = new MutationObserver(sync)
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] })
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    mq.addEventListener("change", sync)
    return () => {
      mo.disconnect()
      mq.removeEventListener("change", sync)
    }
  }, [])

  const onThemeChange = (next: Theme) => {
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem("theme", next)
    } catch {}
  }

  const c = COLORS[theme]

  return (
    <SculptureHero
      src={imageSrc}
      darkSrc={imageSrc}
      mobileSrc={imageSrc}
      mobileDarkSrc={imageSrc}
      imageAlt={`Portrait of ${name}, smiling, wearing glasses and a navy blazer`}
      brand={name}
      brandHref="#top"
      navLinks={[
        { label: "Projects", href: "#projects" },
        { label: "Services", href: "#services" },
        { label: "About", href: "#about" },
      ]}
      navCta={{ label: "Get in touch", href: "#contact" }}
      eyebrow={`${role} · ${location}`}
      headline={"Organised work.\nReliable results."}
      headlineAccent="Reliable results."
      body={`Hi, I'm ${name}. I help busy business owners with data entry, web research, admin support and customer service, using Claude, ChatGPT and GoHighLevel to work faster and more accurately.`}
      primaryCta={{ label: "Get in touch", href: "#contact" }}
      secondaryCta={{ label: "See my services", href: "#services" }}
      hint="Move your cursor over the photo"
      hintTouch="Touch the photo"
      theme={theme}
      onThemeChange={onThemeChange}
      background={COLORS.light.bg}
      darkBackground={COLORS.dark.bg}
      textColor={c.text}
      accentColor={c.accent}
      headingFont="'Poppins', system-ui, sans-serif"
      accentFont="'Poppins', system-ui, sans-serif"
      bodyFont="'Poppins', system-ui, sans-serif"
      loadFonts={false}
      particleDensity={0.45}
      sculptureScale={0.95}
      mobileSculptureScale={0.85}
      mobileOverlap={0}
      intro
      backdropText="oliva"
      showCredit={false}
      height="max(100svh, 620px)"
    />
  )
}
