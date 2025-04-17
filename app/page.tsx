
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, Zap, Shield, Database, Mail, Globe, Sparkles, ArrowUpRight, Code2, Blocks } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Auth & Security",
    description: "Enterprise-grade security",
    features: ["Better Auth", "OAuth providers", "JWT & Sessions", "RBAC system"]
  },
  {
    icon: Database,
    title: "Database Stack",
    description: "Type-safe & scalable",
    features: ["PostgreSQL", "Prisma ORM", "Migrations", "Connection pooling"]
  },
  {
    icon: Code2,
    title: "Next.js 15",
    description: "Latest features",
    features: ["Server actions", "Partial RSC", "Route handlers", "Metadata API"]
  },
  {
    icon: Blocks,
    title: "UI Components",
    description: "Modern design system",
    features: ["Shadcn/ui", "Tailwind CSS", "Radix UI", "Dark mode"]
  },
  {
    icon: Mail,
    title: "Core Features",
    description: "Ready integrations",
    features: ["PayPal", "Email (Resend)", "Storage (S3)", "Analytics"]
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="fixed inset-0 -z-10 overflow-hidden w-full">
        <div className="absolute inset-0 bg-grid-slate-200/20 bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_120%)]" />
        <div className="absolute -left-[10%] top-0 h-[600px] w-[600px] rounded-full bg-purple-400/20 blur-[120px] animate-blob" />
        <div className="absolute -right-[10%] top-[20%] h-[600px] w-[600px] rounded-full bg-indigo-400/20 blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[10%] left-[20%] h-[600px] w-[600px] rounded-full bg-violet-400/20 blur-[120px] animate-blob animation-delay-4000" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl w-full">
        <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-500 opacity-80 blur" />
              <div className="relative flex h-full w-full items-center justify-center rounded-lg bg-black font-bold text-white">NS</div>
            </div>
            <span className="text-xl font-bold">Next SaaS</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Features"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">Sign in</Button>
            <Button size="sm" className="bg-gradient-to-r from-violet-500 to-indigo-500 hover:opacity-90">
              Get Started
            </Button>
          </div>
        </nav>
      </header>

      <main className="w-full">
        <section className="relative py-20 sm:py-32 w-full overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] hero-blob animate-hero-blob"
              style={{ '--blob-color': 'rgba(139, 92, 246, 0.15)' } as React.CSSProperties}
            />
            <div 
              className="absolute top-1/3 -right-1/4 w-[600px] h-[600px] hero-blob animate-hero-blob"
              style={{ '--blob-color': 'rgba(99, 102, 241, 0.15)', 'animationDelay': '-5s' } as React.CSSProperties}
            />
            <div 
              className="absolute -bottom-1/4 left-1/3 w-[700px] h-[700px] hero-blob animate-hero-blob"
              style={{ '--blob-color': 'rgba(167, 139, 250, 0.15)', 'animationDelay': '-10s' } as React.CSSProperties}
            />
          </div>

          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium">
                <Badge variant="default" className="mr-2 rounded-full px-2 py-0.5">
                  <Sparkles className="mr-1 h-3.5 w-3.5" />
                  New
                </Badge>
                <span className="text-muted-foreground">Next.js 15 + Postgres + Better Auth</span>
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Build Your SaaS{" "}
                <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
                  Faster Than Ever
                </span>
              </h1>

              <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
                Production-ready starter kit with authentication, database, and modern UI components.
                Launch your SaaS project in minutes, not months.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-violet-500 to-indigo-500 hover:opacity-90">
                  Start Building
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  View Documentation
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              
             
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-20 sm:py-32 w-full">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Everything you need to build a{" "}
                <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
                  modern SaaS
                </span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                A complete suite of features to help you build, launch, and scale your SaaS application.
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <Card key={index} className="group relative overflow-hidden transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="rounded-lg bg-gradient-to-br from-violet-500/10 to-indigo-500/10 p-2.5">
                        <feature.icon className="h-5 w-5 text-violet-500" />
                      </div>
                      <div>
                        <CardTitle>{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-violet-500" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
