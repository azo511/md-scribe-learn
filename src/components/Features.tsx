import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Clock, 
  MessageSquare, 
  Star, 
  Search, 
  Users,
  Target,
  Zap
} from 'lucide-react';
import sectionsIcon from '@/assets/sections-icon.jpg';
import timelineIcon from '@/assets/timeline-icon.jpg';

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'شرح مبسط للمواد',
      description: 'نشرح لك فكرة كل مادة بطريقة سهلة ومفهومة مع أمثلة واضحة',
      color: 'from-primary to-primary/70',
      image: sectionsIcon
    },
    {
      icon: Clock,
      title: 'تنظيم المقررات',
      description: 'كل مادة منظمة حسب الفصول والوحدات لتسهيل المراجعة',
      color: 'from-accent to-accent/70',
      image: timelineIcon
    },
    {
      icon: MessageSquare,
      title: 'أسئلة ونقاشات',
      description: 'اطرح أسئلتك حول المواد وناقش مع زملائك في نفس التخصص',
      color: 'from-emerald-500 to-emerald-400'
    },
    {
      icon: Star,
      title: 'تقييم الملخصات',
      description: 'اختر أفضل الملخصات لموادك بناءً على تقييم الطلاب الآخرين',
      color: 'from-orange-500 to-orange-400'
    },
    {
      icon: Search,
      title: 'بحث في موادك',
      description: 'ابحث في جميع موادك الدراسية بسرعة واعثر على ما تحتاجه فوراً',
      color: 'from-blue-500 to-blue-400'
    },
    {
      icon: Target,
      title: 'خطة دراسية',
      description: 'خطط دراسية مرتبة حسب تخصصك ومستواك الأكاديمي',
      color: 'from-purple-500 to-purple-400'
    }
  ];

  const stats = [
    { label: 'مواد دراسية', value: '25+', icon: BookOpen },
    { label: 'ملخصات متاحة', value: '500+', icon: Clock },
    { label: 'طلاب مستفيدون', value: '10K+', icon: Users },
    { label: 'معدل الرضا', value: '98%', icon: Zap }
  ];

  return (
    <section id="sections" className="section-padding bg-secondary/30">
      <div className="container-responsive">
        {/* Header */}
        <div className="text-center space-y-4 mb-16" dir="rtl">
          <h2 className="heading-secondary text-gradient">
            لماذا ملخصاتي هو دليلك المثالي
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ميزات مصممة خصيصاً لتجعل فهم موادك الدراسية أسهل وأكثر وضوحاً
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="card-elegant group hover:scale-105">
                <CardHeader className="text-center">
                  {feature.image ? (
                    <div className="relative mx-auto mb-4">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-16 h-16 rounded-xl object-cover mx-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl"></div>
                    </div>
                  ) : (
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  )}
                  <CardTitle className="text-xl font-semibold" dir="rtl">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed" dir="rtl">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-card rounded-3xl p-8 shadow-soft">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient" dir="rtl">
            إحصاءات المنصة
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground" dir="rtl">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button className="btn-hero">
            استكشف جميع الميزات
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;