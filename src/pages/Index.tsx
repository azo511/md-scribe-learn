import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import SubjectCards from '@/components/SubjectCards';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <SubjectCards />
        
        {/* About Section */}
        <section id="about" className="section-padding bg-gradient-to-br from-secondary/20 to-primary/5">
          <div className="container-responsive">
            <div className="max-w-3xl mx-auto text-center space-y-6" dir="rtl">
              <h2 className="text-3xl font-bold text-gradient">
                لماذا اخترت ملخصاتي؟
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  منصة "ملخصاتي" هي رفيقك الدراسي الأمثل الذي يحول المواد المعقدة إلى محتوى 
                  سهل ومفهوم.
                </p>
                
                <p>
                  نساعدك على فهم فكرة كل مادة تدرسها بطريقة مبسطة ومنظمة، 
                  مما يجعل دراستك أكثر فعالية ومتعة.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="card-elegant text-center p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">هدفنا</h3>
                  <p className="text-sm">
                    جعل كل طالب قادر على فهم موادهم بسهولة
                  </p>
                </div>
                
                <div className="card-elegant text-center p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">طريقتنا</h3>
                  <p className="text-sm">
                    تبسيط المفاهيم المعقدة وتنظيم المحتوى
                  </p>
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