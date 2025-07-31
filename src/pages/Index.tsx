import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Icon from '@/components/ui/icon'

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-open-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-roboto font-bold text-primary">
              ЮридКонсалт
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#team" className="text-gray-600 hover:text-primary transition-colors">Команда</a>
              <a href="#industries" className="text-gray-600 hover:text-primary transition-colors">Отрасли</a>
              <a href="#blog" className="text-gray-600 hover:text-primary transition-colors">Блог</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary text-white hover:bg-primary/90">
              Консультация
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-roboto font-bold text-gray-900 leading-tight">
                  Профессиональные
                  <span className="text-primary block">юридические услуги</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Защитим ваши интересы с 2010 года. Более 2000 успешных дел. 
                  Индивидуальный подход к каждому клиенту.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                  Записаться на консультацию
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Наши услуги
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-roboto font-bold text-primary">2000+</div>
                  <div className="text-sm text-gray-500">Успешных дел</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-roboto font-bold text-primary">13</div>
                  <div className="text-sm text-gray-500">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-roboto font-bold text-primary">95%</div>
                  <div className="text-sm text-gray-500">Выигранных дел</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary/5 rounded-2xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <Icon name="Scale" size={32} className="text-primary mb-3" />
                    <h3 className="font-roboto font-semibold text-gray-900">Корпоративное право</h3>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <Icon name="FileText" size={32} className="text-primary mb-3" />
                    <h3 className="font-roboto font-semibold text-gray-900">Договорная работа</h3>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <Icon name="Shield" size={32} className="text-primary mb-3" />
                    <h3 className="font-roboto font-semibold text-gray-900">Защита в суде</h3>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <Icon name="Users" size={32} className="text-primary mb-3" />
                    <h3 className="font-roboto font-semibold text-gray-900">Консультации</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-roboto font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр юридических услуг для бизнеса и частных лиц
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Building",
                title: "Корпоративное право",
                description: "Создание и сопровождение бизнеса, корпоративные споры, M&A сделки",
                price: "от 50 000 ₽"
              },
              {
                icon: "FileContract",
                title: "Договорная работа",
                description: "Подготовка, анализ и сопровождение договоров любой сложности",
                price: "от 15 000 ₽"
              },
              {
                icon: "Gavel",
                title: "Судебное представительство",
                description: "Защита интересов в арбитражных и общих судах всех инстанций",
                price: "от 80 000 ₽"
              },
              {
                icon: "TrendingUp",
                title: "Налоговое планирование",
                description: "Оптимизация налогов, налоговые споры, проверки",
                price: "от 30 000 ₽"
              },
              {
                icon: "Home",
                title: "Недвижимость",
                description: "Сделки с недвижимостью, оформление прав, споры",
                price: "от 25 000 ₽"
              },
              {
                icon: "Heart",
                title: "Семейное право",
                description: "Развод, алименты, раздел имущества, опека",
                price: "от 20 000 ₽"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-gray-100">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="font-roboto text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
                      {service.price}
                    </Badge>
                    <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/5">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-roboto font-bold text-gray-900 mb-4">
              Наша команда
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Опытные юристы с многолетней практикой в различных отраслях права
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Петрова",
                position: "Партнер, корпоративное право",
                experience: "15 лет опыта",
                specialization: "M&A, корпоративные споры",
                education: "МГУ им. Ломоносова"
              },
              {
                name: "Дмитрий Иванов",
                position: "Старший юрист",
                experience: "12 лет опыта",
                specialization: "Арбитражные споры",
                education: "СПбГУ"
              },
              {
                name: "Елена Сидорова",
                position: "Юрист по налогам",
                experience: "8 лет опыта",
                specialization: "Налоговые споры, планирование",
                education: "МГИМО"
              }
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={32} className="text-primary" />
                  </div>
                  <CardTitle className="font-roboto text-xl text-gray-900">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.position}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-gray-600">{member.experience}</p>
                  <p className="text-sm text-gray-600">{member.specialization}</p>
                  <p className="text-sm text-gray-500">{member.education}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-roboto font-bold text-gray-900 mb-4">
              Отрасли
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Глубокая экспертиза в ключевых отраслях экономики
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "Cpu", title: "IT и Телеком", cases: "200+ дел" },
              { icon: "Factory", title: "Производство", cases: "150+ дел" },
              { icon: "ShoppingCart", title: "Ритейл", cases: "180+ дел" },
              { icon: "Banknote", title: "Финансы", cases: "120+ дел" },
              { icon: "Truck", title: "Логистика", cases: "90+ дел" },
              { icon: "Stethoscope", title: "Медицина", cases: "70+ дел" },
              { icon: "GraduationCap", title: "Образование", cases: "60+ дел" },
              { icon: "Zap", title: "Энергетика", cases: "80+ дел" }
            ].map((industry, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow border-gray-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name={industry.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-roboto font-semibold text-gray-900 mb-2">{industry.title}</h3>
                  <p className="text-sm text-gray-500">{industry.cases}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-roboto font-bold text-gray-900 mb-4">
              Блог
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Актуальные материалы о изменениях в законодательстве
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Новые изменения в налоговом кодексе 2024",
                excerpt: "Разбираем ключевые изменения, которые коснутся бизнеса с 1 января...",
                date: "15 декабря 2023",
                category: "Налоги"
              },
              {
                title: "Цифровые права в новом законодательстве",
                excerpt: "Как защитить интеллектуальную собственность в цифровую эпоху...",
                date: "12 декабря 2023",
                category: "IT-право"
              },
              {
                title: "Корпоративные споры: тренды 2024",
                excerpt: "Анализ судебной практики и прогнозы на следующий год...",
                date: "10 декабря 2023",
                category: "Корпоративное право"
              }
            ].map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <CardTitle className="font-roboto text-xl text-gray-900 leading-tight">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/5 p-0">
                    Читать далее →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Appointment Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-roboto font-bold text-gray-900 mb-8">
                Контакты
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-roboto font-semibold text-gray-900 mb-1">Адрес</h3>
                    <p className="text-gray-600">г. Москва, ул. Тверская, д. 15, офис 201</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-roboto font-semibold text-gray-900 mb-1">Телефон</h3>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                    <p className="text-gray-600">+7 (495) 123-45-68</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-roboto font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@juridkonsalt.ru</p>
                    <p className="text-gray-600">legal@juridkonsalt.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-roboto font-semibold text-gray-900 mb-1">Режим работы</h3>
                    <p className="text-gray-600">Пн-Пт: 9:00 - 19:00</p>
                    <p className="text-gray-600">Сб: 10:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Form */}
            <div>
              <Card className="shadow-lg border-gray-100">
                <CardHeader>
                  <CardTitle className="font-roboto text-2xl text-gray-900">
                    Записаться на консультацию
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Заполните форму, и мы свяжемся с вами в течение часа
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Имя</label>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Телефон</label>
                      <Input placeholder="+7 (___) ___-__-__" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Тип услуги</label>
                    <select className="w-full p-3 border border-gray-200 rounded-md bg-white">
                      <option>Корпоративное право</option>
                      <option>Договорная работа</option>
                      <option>Судебное представительство</option>
                      <option>Налоговое планирование</option>
                      <option>Недвижимость</option>
                      <option>Семейное право</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Описание вопроса</label>
                    <Textarea 
                      placeholder="Опишите вашу ситуацию..." 
                      className="h-24 resize-none"
                    />
                  </div>
                  
                  <Button className="w-full bg-primary text-white hover:bg-primary/90" size="lg">
                    Записаться на консультацию
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-roboto font-bold mb-4">ЮридКонсалт</div>
              <p className="text-gray-400 mb-4">
                Профессиональные юридические услуги с 2010 года
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={16} />
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={16} />
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={16} />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-roboto font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Корпоративное право</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Договорная работа</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Судебное представительство</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Налоговое планирование</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-roboto font-semibold mb-4">Отрасли</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">IT и Телеком</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Производство</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ритейл</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Финансы</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-roboto font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li>г. Москва, ул. Тверская, д. 15</li>
                <li>+7 (495) 123-45-67</li>
                <li>info@juridkonsalt.ru</li>
                <li>Пн-Пт: 9:00 - 19:00</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ЮридКонсалт. Все права защищены.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Пользовательское соглашение</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index