import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Calendar, Award, Bell, ArrowRight } from 'lucide-react';
import ImageSlider from '../components/ImageSlider';
import SectionHeader from '../components/SectionHeader';
import NewsCard from '../components/NewsCard';

const Home = () => {
  const sliderImages = [
    {
      src: "20231110_140856.jpg",
      alt: "Students in classroom",
      caption: "Nurturing young minds through quality education"
    },
    {
      src: "ADMIN BLOCK.jpg",
      alt: "School sports day",
      caption: "Promoting physical fitness and team spirit"
    },
    {
      src: "20230215_173051.jpg",
      alt: "Science laboratory",
      caption: "State-of-the-art facilities for hands-on learning"
    }
  ];

  const newsItems = [
    {
      title: "Annual Sports Day 2025",
      date: "April 15, 2025",
      summary: "Join us for our annual sports day celebration featuring track events, team sports, and special performances by students.",
      imageUrl: "BASKET BALL BOYS.jpg"
    },
    {
      title: "Science Exhibition Winners",
      date: "March 28, 2025",
      summary: "Congratulations to our students who won top prizes at the Regional Science Exhibition with their innovative projects.",
      imageUrl: "20221202_101817.jpg"
    },
    {
      title: "New Computer Lab Inauguration",
      date: "March 10, 2025",
      summary: "We're excited to announce the inauguration of our new state-of-the-art computer laboratory equipped with the latest technology.",
      imageUrl: "20221202_101027.jpg"
    }
  ];

  return (
    <div>
      {/* Hero Section with Slider */}
      <section>
        <ImageSlider images={sliderImages} />
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-6">Welcome to Humanity Public School</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Nurturing minds, building character, and inspiring excellence through holistic education since 1995.
          </p>
          <div className="flex justify-center">
            <Link to="/admissions" className="bg-blue-900 text-white py-3 px-6 rounded-md hover:bg-blue-800 transition-colors mr-4">
              Apply Now
            </Link>
            <Link to="/contact" className="bg-white text-blue-900 border border-blue-900 py-3 px-6 rounded-md hover:bg-gray-100 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <SectionHeader title="Principal's Message" />
              <p className="text-gray-700 mb-4">
                Dear Parents and Students,
              </p>
              <p className="text-gray-700 mb-4">
                Welcome to Humanity Public School, where we believe in nurturing not just academic excellence, but also character, creativity, and compassion. Our mission is to provide a supportive and challenging environment where students can discover their potential and develop into responsible global citizens.
              </p>
              <p className="text-gray-700 mb-4">
                At Humanity Public School, we combine traditional values with innovative teaching methods to prepare our students for the challenges of the 21st century. Our dedicated faculty members are committed to providing personalized attention to each student, ensuring that they receive the guidance and support they need to excel.
              </p>
              <p className="text-gray-700 mb-6">
                We invite you to explore our website and learn more about our academic programs, extracurricular activities, and community initiatives. We look forward to partnering with you in your child's educational journey.
              </p>
              <p className="font-bold text-blue-900">
                MR GAURAV CHARK<br />
                Principal, Humanity Public School
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="data:image/jpeg;base64,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" 
                alt="Principal MR Gaurav chark" 
                className="rounded-lg shadow-lg max-w-full h-auto md:scale-150"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Explore Our School" subtitle="Quick access to important information" centered={true} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <BookOpen className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Academic Programs</h3>
              </div>
              <p className="text-gray-700 mb-4">Explore our comprehensive curriculum designed to foster critical thinking and creativity.</p>
              <Link to="/academics" className="flex items-center text-blue-600 hover:text-blue-800">
                Learn more <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Admissions</h3>
              </div>
              <p className="text-gray-700 mb-4">Find information about the admission process, requirements, and important dates.</p>
              <Link to="/admissions" className="flex items-center text-blue-600 hover:text-blue-800">
                Learn more <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Calendar className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">School Calendar</h3>
              </div>
              <p className="text-gray-700 mb-4">Stay updated with important school events, holidays, and examination schedules.</p>
              <Link to="/academics" className="flex items-center text-blue-600 hover:text-blue-800">
                Learn more <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Award className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Student Achievements</h3>
              </div>
              <p className="text-gray-700 mb-4">Celebrate the accomplishments of our students in academics, sports, and extracurricular activities.</p>
              <Link to="/student-life" className="flex items-center text-blue-600 hover:text-blue-800">
                Learn more <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Bell className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Announcements</h3>
              </div>
              <p className="text-gray-700 mb-4">Get the latest updates and announcements from the school administration.</p>
              <a href="#news" className="flex items-center text-blue-600 hover:text-blue-800">
                Learn more <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section id="news" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Latest News & Announcements" subtitle="Stay updated with what's happening at our school" centered={true} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <NewsCard 
                key={index}
                title={news.title}
                date={news.date}
                summary={news.summary}
                imageUrl={news.imageUrl}
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button className="bg-blue-900 text-white py-2 px-6 rounded-md hover:bg-blue-800 transition-colors">
              View All News
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1995</div>
              <p className="text-blue-200">Established</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1,200+</div>
              <p className="text-blue-200">Students</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">80+</div>
              <p className="text-blue-200">Experienced Faculty</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-blue-200">Success Rate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;