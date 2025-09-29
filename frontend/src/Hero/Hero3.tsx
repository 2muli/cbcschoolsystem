
import { FaChartBar, FaClipboardCheck, FaUserGraduate, FaUsers } from 'react-icons/fa';

const Hero3 = () => {
     const features = [
    {
      icon: <FaUserGraduate size={30} className="text-blue-600" />,
      title: "Student Dashboard",
      desc: "Personalized learning profiles and progress tracking."
    },
    {
      icon: <FaClipboardCheck size={30} className="text-green-600" />,
      title: "Assessments",
      desc: "Easy-to-create tools for continuous evaluation."
    },
    {
      icon: <FaChartBar size={30} className="text-purple-600" />,
      title: "Reports",
      desc: "Comprehensive performance analytics and insights."
    },
    {
      icon: <FaUsers size={30} className="text-pink-600" />,
      title: "Parent Portal",
      desc: "Communication and resources to involve parents in learning."
    }
  ];
  return (
    <section id="features"  className="p-12 bg-gray-100" >
       <h2 className="text-3xl font-bold text-center mb-8  text-blue-600 ">Key Features</h2>
             <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            //transition on the cards
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg hover:bg-gray-300 
           transition duration-500 ease-in-out text-center"
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero3
