// app/test/page.tsx
import ProjectShowcaseVelocity from '@/components/ProjectShowcaseVelocity';
import ImageScrollGallery from '@/components/ImageScrollGallery';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-white text-text-light">
      <header className="pt-20 pb-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Scroll Velocity Test</h1>
        <p className="text-text-muted">Testing Magic UI Scroll-Based Velocity Effects</p>
      </header>
      
      <main className="space-y-20 pb-20">
        
        {/* Test 2: Project Showcase */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Project Showcase</h2>
          <ProjectShowcaseVelocity />
        </section>
        
        {/* Test 3: Image Gallery */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Image Scroll Gallery</h2>
          <ImageScrollGallery />
        </section>
      </main>
    </div>
  );
}