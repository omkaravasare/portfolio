import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import budgetwiseimage from '../assets/budgetwise.PNG';
import sfimage from '../assets/sf.jpg';
import awsimage from '../assets/aws.png';
import primage from '../assets/project1.jpeg';

const projects = [
  {
    title: 'GenAI Driven Financial Intelligence Platform',
    description: 'Collaboratively developed a GenAI-powered financial analysis platform that enables analysts and investors to upload financial reports, automatically extract key financial data, calculate critical ratios, and generate AI-driven insights through an interactive dashboard and automated presentations.',
    image: primage,
    technologies: ['Python', 'FastAPI', 'Next.js', 'React', 'Tailwind CSS', 'PyMuPDF', 'spaCy', 'LLM integration (Groq/Llama)', 'NetworkX.'],
    githubUrl: 'https://github.com/pranavtdhote/GenAI-Financial-Intelligence-Platform',
  },
  {
    title: 'BudgetWise: AI Finance Manager',
    description: 'A Java full stack personal finance manager featuring Spring Security JWT authentication, BCrypt password hashing, and RESTful APIs backed by MongoDB. Integrated Groq AI (Llama 3.3 70B) for personalized financial insights, interactive analytics dashboards, and monthly report generation with a responsive React 18 frontend.',
    image: budgetwiseimage, 
    technologies: ['Java 17', 'Spring Boot 3.2', 'React 18', 'MongoDB', 'Groq AI'],
    githubUrl: 'https://github.com/omkaravasare/budgetwise-app',
  },
  {
    title: 'AWS Highly Available Web App',
    description: 'Architected a scalable infrastructure using EC2 Auto Scaling Groups and Application Load Balancer for high availability and fault tolerance. Implemented multi-AZ deployment with automated scaling policies to handle variable traffic loads and ensure 99.9% uptime.',
    image: awsimage,
    technologies: ['AWS', 'EC2', 'ALB', 'Auto Scaling', 'Cloud'],
  },
  {
    title: 'LightGBM based Sales Prediction (MIS)',
    description: 'Engineered a sales forecasting system using LightGBM with feature engineering and Optuna tuning, improving prediction accuracy on Walmart sales data. Deployed as a Flask web app with real-time forecasts and visual dashboards, enabling data-driven inventory optimization. Published research in IJARSCT journal.',
    image: sfimage,
    technologies: ['Python', 'LightGBM', 'Flask', 'Optuna'],
    liveUrl: 'https://www.researchgate.net/publication/390476554_LightGBM_based_Machine_Learning_Approach_for_Sales_Prediction',
    githubUrl: 'https://github.com/omkaravasare/sales_prediction',
  },
  {
  title: 'Bitcoin Price Prediction using Linear Regression',
  description: 'Developed a machine learning model to predict the next-day closing price of Bitcoin using historical cryptocurrency data. The system performs data preprocessing, feature engineering (lag features, moving averages, volatility, and returns), and trains a Linear Regression model to forecast price trends. Model performance is evaluated using R², MAE, and RMSE metrics and visualized through prediction vs actual graphs, residual plots, and error histograms to analyze accuracy and market behavior.',
  image: btcimage,
  technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Jupyter Notebook', 'RobustScaler', 'Linear Regression'],
  githubUrl: 'https://github.com/omkaravasare/bitcoinprice_prediction'
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of projects I've built — from full-stack apps to ML models.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group glass-card overflow-hidden"
              style={{ perspective: '1000px' }}
            >
              {/* Project Preview */}
              <div className="relative h-48 overflow-hidden" style={{ perspective: '1000px' }}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-dark-800 to-dark-700 overflow-hidden flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-cyan/10 group-hover:from-accent/20 group-hover:to-cyan/20 transition-all duration-500" />
                    <span className="text-5xl font-heading font-bold text-white/5 group-hover:text-white/10 transition-colors duration-300 relative z-10">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-accent-light hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-accent-light hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-accent-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono text-accent-light bg-accent/10 rounded-full border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-1.5 text-sm text-cyan hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink className="text-sm" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub className="text-sm" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
