import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, GraduationCap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-background via-background to-secondary/30">
      <div className="container-responsive">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-block animate-fade-in-up">
            <span className="text-sm font-medium bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20">
              دليلك الشخصي للدراسة 📖
            </span>
          </div>
          
          {/* Main Title */}
          <div className="space-y-4 animate-fade-in-up" dir="rtl">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="text-gradient">ملخصاتي</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
              دليلك في موادك الدراسية
            </h2>
          </div>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-fade-in-up" dir="rtl">
            مادة تشرح لك دروسك وفكرة المادة التي تدرسها بطريقة مبسطة ومنظمة
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto animate-scale-in">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground">مادة</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">25</div>
              <div className="text-sm text-muted-foreground">تخصص</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">8K+</div>
              <div className="text-sm text-muted-foreground">طالب</div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Button className="btn-hero group px-8 py-4">
              ابدأ مع موادك الآن
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="flex items-center justify-center space-x-8 rtl:space-x-reverse pt-4 animate-fade-in-up">
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-muted-foreground">
              <BookOpen className="h-4 w-4 text-primary" />
              <span>شرح مبسط</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-muted-foreground">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span>تنظيم أكاديمي</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;