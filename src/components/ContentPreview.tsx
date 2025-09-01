import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, 
  Eye, 
  MessageSquare, 
  Star, 
  ArrowLeft,
  Calendar,
  User
} from 'lucide-react';

const ContentPreview = () => {
  const recentContent = [
    {
      id: 1,
      title: 'مقدمة في البرمجة بـ JavaScript',
      category: 'البرمجة',
      description: 'تعلم أساسيات JavaScript من الصفر مع أمثلة عملية وتطبيقات تفاعلية',
      readTime: '15 دقيقة',
      views: 1250,
      comments: 45,
      rating: 4.8,
      date: '2024-01-15',
      tags: ['JavaScript', 'البرمجة', 'مبتدئ'],
      author: 'أحمد محمد'
    },
    {
      id: 2,
      title: 'أساسيات تصميم قواعد البيانات',
      category: 'قواعد البيانات',
      description: 'فهم المفاهيم الأساسية لتصميم قواعد البيانات والعلاقات بين الجداول',
      readTime: '20 دقيقة',
      views: 980,
      comments: 32,
      rating: 4.6,
      date: '2024-01-12',
      tags: ['قواعد البيانات', 'SQL', 'متقدم'],
      author: 'فاطمة علي'
    },
    {
      id: 3,
      title: 'مبادئ تطوير واجهات المستخدم',
      category: 'تصميم الواجهات',
      description: 'تعلم كيفية إنشاء واجهات مستخدم جذابة وسهلة الاستخدام',
      readTime: '25 دقيقة',
      views: 1480,
      comments: 67,
      rating: 4.9,
      date: '2024-01-10',
      tags: ['UI/UX', 'تصميم', 'React'],
      author: 'محمد سعد'
    }
  ];

  const popularTags = [
    'JavaScript', 'React', 'Python', 'قواعد البيانات', 'تصميم', 
    'خوارزميات', 'أمن المعلومات', 'ذكاء اصطناعي', 'تطوير الويب'
  ];

  return (
    <section id="tags" className="section-padding">
      <div className="container-responsive">
        {/* Header */}
        <div className="text-center space-y-4 mb-16" dir="rtl">
          <h2 className="heading-secondary text-gradient">
            أحدث المحتوى التعليمي
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            استكشف أحدث الملخصات والدروس التعليمية المضافة حديثاً
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Content Cards */}
          <div className="lg:col-span-2 space-y-6">
            {recentContent.map((item) => (
              <Card key={item.id} className="card-content hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-start justify-between" dir="rtl">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <Badge variant="secondary">{item.category}</Badge>
                        <span className="text-sm text-muted-foreground flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(item.date).toLocaleDateString('ar-SA')}
                        </span>
                      </div>
                      <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                        {item.title}
                      </CardTitle>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2" dir="rtl">
                      {item.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {item.readTime}
                        </span>
                        <span className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          {item.views}
                        </span>
                        <span className="flex items-center">
                          <MessageSquare className="h-3 w-3 mr-1" />
                          {item.comments}
                        </span>
                        <span className="flex items-center">
                          <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                          {item.rating}
                        </span>
                      </div>
                      <span className="flex items-center" dir="rtl">
                        <User className="h-3 w-3 mr-1" />
                        {item.author}
                      </span>
                    </div>

                    <Button variant="ghost" className="w-full group">
                      اقرأ المزيد
                      <ArrowLeft className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Popular Tags */}
            <Card className="card-content">
              <CardHeader>
                <CardTitle dir="rtl">الوسوم الشائعة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2" dir="rtl">
                  {popularTags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="card-content bg-gradient-primary text-primary-foreground">
              <CardHeader>
                <CardTitle dir="rtl">إحصاءات سريعة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3" dir="rtl">
                  <div className="flex justify-between">
                    <span>إجمالي الملخصات</span>
                    <span className="font-bold">245</span>
                  </div>
                  <div className="flex justify-between">
                    <span>الدروس الجديدة هذا الشهر</span>
                    <span className="font-bold">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span>المشاهدات الكلية</span>
                    <span className="font-bold">25.4K</span>
                  </div>
                  <div className="flex justify-between">
                    <span>متوسط التقييم</span>
                    <span className="font-bold">4.7 ⭐</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button className="btn-hero">
            استكشف جميع المحتوى
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContentPreview;