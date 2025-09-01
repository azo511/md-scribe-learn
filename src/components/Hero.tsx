import { Button } from '@/components/ui/button';
import { ArrowLeft, PlayCircle, BookOpen, Users } from 'lucide-react';
import heroImage from '@/assets/hero-education.jpg';

const Hero = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-background via-background to-secondary/20 overflow-hidden">
      <div className="container-responsive">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up" dir="rtl">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-medium bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20">
                  دليلك الشخصي للدراسة 📖
                </span>
              </div>
              
              <h1 className="heading-primary">
                <span className="text-gradient">ملخصاتي</span>
                <br />
                دليلك في موادك الدراسية
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                مادة تشرح لك دروسك وفكرة المادة التي تدرسها بطريقة مبسطة ومنظمة. 
                اجعل دراستك أسهل مع ملخصات شاملة لكل مقرر.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">مادة دراسية</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">25</div>
                <div className="text-sm text-muted-foreground">تخصص أكاديمي</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">8000+</div>
                <div className="text-sm text-muted-foreground">طالب يدرس معنا</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero group">
                ابدأ مع موادك الآن
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" className="btn-outline-hero group">
                <PlayCircle className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                كيف تعمل المنصة
              </Button>
            </div>

            {/* Features Preview */}
            <div className="flex items-center space-x-6 rtl:space-x-reverse pt-4">
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-muted-foreground">
                <BookOpen className="h-4 w-4 text-primary" />
                <span>شرح مبسط للمواد</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-muted-foreground">
                <Users className="h-4 w-4 text-primary" />
                <span>دليل دراسي شامل</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="منصة ملخصاتي التعليمية"
                className="w-full h-auto rounded-3xl shadow-2xl animate-float"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-accent rounded-full opacity-20 blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-primary rounded-full opacity-10 blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;