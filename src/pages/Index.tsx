import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ContentPreview from '@/components/ContentPreview';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <Features />
        <ContentPreview />
        
        {/* About Section */}
        <section id="about" className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container-responsive">
            <div className="max-w-4xl mx-auto text-center space-y-8" dir="rtl">
              <h2 className="heading-secondary text-gradient">
                نبذة عن المنصة
              </h2>
              
              <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed">
                <p className="text-lg mb-6">
                  منصة "ملخصاتي" هي مبادرة تعليمية عربية تهدف إلى توفير محتوى تعليمي عالي الجودة 
                  ومنظم بشكل احترافي. نؤمن بأن التعليم حق للجميع، ونسعى لجعل المعرفة متاحة 
                  ومفهومة للطلاب والمتعلمين في العالم العربي.
                </p>
                
                <p className="text-base mb-6">
                  تجمع منصتنا بين التقنيات الحديثة والمحتوى التعليمي المتميز، حيث نوفر:
                  ملخصات شاملة، أدوات تفاعلية، مجتمع تعليمي، ومسارات تعلم مخصصة. 
                  كل ذلك في بيئة عربية تدعم التعلم الذاتي والتطوير المهني.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="card-elegant text-center p-6">
                    <h3 className="text-xl font-semibold mb-3 text-primary">رؤيتنا</h3>
                    <p className="text-sm">
                      أن نكون المرجع الأول للمحتوى التعليمي العربي في المجالات التقنية والأكاديمية
                    </p>
                  </div>
                  
                  <div className="card-elegant text-center p-6">
                    <h3 className="text-xl font-semibold mb-3 text-primary">رسالتنا</h3>
                    <p className="text-sm">
                      تسهيل عملية التعلم وتوفير معرفة عالية الجودة لكل متعلم عربي
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
