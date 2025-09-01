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
                لماذا اخترت ملخصاتي؟
              </h2>
              
              <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed">
                <p className="text-lg mb-6">
                  منصة "ملخصاتي" هي رفيقك الدراسي الأمثل التي تحول المواد المعقدة إلى محتوى 
                  سهل ومفهوم. نساعدك على فهم فكرة كل مادة تدرسها بطريقة مبسطة ومنظمة، 
                  مما يجعل دراستك أكثر فعالية ومتعة.
                </p>
                
                <p className="text-base mb-6">
                  كل مادة في منصتنا مصممة لتكون دليلك الشخصي، حيث نقدم:
                  شروحات مبسطة لكل موضوع، أمثلة عملية من واقع المنهج، 
                  ملخصات منظمة حسب الفصول، وخطة دراسية واضحة لكل مقرر.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="card-elegant text-center p-6">
                    <h3 className="text-xl font-semibold mb-3 text-primary">هدفنا</h3>
                    <p className="text-sm">
                      جعل كل طالب قادر على فهم موادهم بسهولة وتحقيق أفضل النتائج الدراسية
                    </p>
                  </div>
                  
                  <div className="card-elegant text-center p-6">
                    <h3 className="text-xl font-semibold mb-3 text-primary">طريقتنا</h3>
                    <p className="text-sm">
                      تبسيط المفاهيم المعقدة وتنظيم المحتوى بطريقة تناسب أسلوب تعلمك
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
