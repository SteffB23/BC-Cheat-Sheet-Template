import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface ResourceItem {
  title: string;
  content: string;
}

interface SimpleModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

function SimpleModal({ isOpen, onClose, title, content }: SimpleModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed inset-x-4 top-[50%] translate-y-[-50%] max-w-lg mx-auto bg-white rounded-xl shadow-xl z-50 overflow-hidden">
        <div className="relative p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
          <div className="prose prose-sm max-w-none text-gray-600 mb-6">
            {content}
          </div>
          <button
            onClick={onClose}
            className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            Wow! Thank You!
          </button>
        </div>
      </div>
    </>
  );
}

export default function TPFBA() {
  const [selectedItem, setSelectedItem] = useState<ResourceItem | null>(null);

  const treatmentPlanning: ResourceItem[] = [
    {
      title: "Client Information",
      content: "Essential demographic information, including client's name, age, diagnosis, and relevant medical history. This section should also include parent/guardian information and emergency contacts."
    },
    {
      title: "Problem Identification",
      content: "Clear description of target behaviors, including operational definitions, current frequency, intensity, and duration of behaviors."
    },
    {
      title: "Goals and Objectives",
      content: "SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound) for each target behavior, including short-term and long-term objectives."
    },
    {
      title: "Intervention Strategies",
      content: "Detailed description of evidence-based interventions selected for each target behavior, including rationale for selection."
    },
    {
      title: "Data Collection Methods",
      content: "Specific measurement procedures, including type of data collection, frequency of measurement, and responsible parties."
    },
    {
      title: "Progress Monitoring",
      content: "Schedule for reviewing progress, criteria for success, and procedures for modifying the plan based on data."
    },
    {
      title: "Crisis Plan",
      content: "Procedures for managing crisis situations, including emergency contacts and specific steps for various scenarios."
    },
    {
      title: "Generalization Strategy",
      content: "Plans for promoting skill generalization across settings, people, and situations."
    },
    {
      title: "Maintenance Plan",
      content: "Strategies for maintaining achieved goals and preventing regression, including follow-up schedule."
    },
    {
      title: "Discharge Criteria",
      content: "Specific criteria for reducing or terminating services, including transition planning."
    }
  ];

  const fbaItems: ResourceItem[] = [
    {
      title: "Indirect Assessment",
      content: "Interviews with caregivers, teachers, and other relevant parties. Review of records, previous assessments, and historical data."
    },
    {
      title: "Direct Observation",
      content: "Systematic observation procedures, including ABC data collection, scatter plots, and duration recording."
    },
    {
      title: "Functional Analysis",
      content: "Controlled manipulation of variables to identify behavior function, including procedures for attention, escape, tangible, and automatic conditions."
    },
    {
      title: "Environmental Analysis",
      content: "Assessment of physical environment, daily routines, and ecological factors that may influence behavior."
    },
    {
      title: "Skill Assessment",
      content: "Evaluation of current skills, including communication, social, adaptive, and academic abilities."
    },
    {
      title: "Preference Assessment",
      content: "Systematic evaluation of potential reinforcers, including procedures for identifying and maintaining motivation."
    },
    {
      title: "Data Analysis",
      content: "Methods for analyzing and interpreting assessment data, including visual analysis and statistical procedures."
    },
    {
      title: "Hypothesis Development",
      content: "Process for developing and testing hypotheses about behavior function based on assessment data."
    },
    {
      title: "Recommendations",
      content: "Development of function-based intervention recommendations, including environmental modifications and teaching strategies."
    },
    {
      title: "Report Writing",
      content: "Guidelines for writing comprehensive FBA reports, including all essential components and recommendations."
    }
  ];

  const typographyLibrary: ResourceItem[] = [
    {
      title: "Aggression",
      content: "Physical actions directed towards others that may cause harm, including hitting, kicking, biting, scratching, or pushing."
    },
    {
      title: "Self-Injury",
      content: "Behaviors that cause physical harm to oneself, such as head-banging, self-biting, or skin-picking."
    },
    {
      title: "Property Destruction",
      content: "Actions that damage or destroy objects in the environment, including throwing items, breaking objects, or tearing materials."
    },
    {
      title: "Elopement",
      content: "Leaving designated areas without permission or supervision, potentially placing oneself in danger."
    },
    {
      title: "Stereotypy",
      content: "Repetitive movements or vocalizations that appear to serve no functional purpose in the current context."
    },
    {
      title: "Non-Compliance",
      content: "Failure to follow instructions or complete tasks within a reasonable timeframe after being asked."
    },
    {
      title: "Tantrums",
      content: "Emotional outbursts characterized by crying, screaming, falling to the ground, or other disruptive behaviors."
    },
    {
      title: "Food Refusal",
      content: "Consistent rejection of food items, including spitting out food, turning head away, or refusing to eat certain textures."
    },
    {
      title: "Verbal Aggression",
      content: "Use of threatening, hostile, or inappropriate language towards others, including yelling, cursing, or name-calling."
    },
    {
      title: "Social Withdrawal",
      content: "Avoiding social interactions, refusing to participate in group activities, or isolating oneself from others."
    }
  ];

  const Section = ({ title, subtitle, items }: { title: string; subtitle: string; items: ResourceItem[] }) => (
    <div className="mb-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <p className="mt-1 text-gray-600">{subtitle}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <motion.button
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => setSelectedItem(item)}
            className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 text-left"
          >
            <h3 className="font-medium text-gray-900">{item.title}</h3>
          </motion.button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">Treatment Plans & FBA</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Section
            title="Treatment Planning"
            subtitle="Guidelines and Templates for creating effective treatment plans"
            items={treatmentPlanning}
          />
          <Section
            title="Functional Behavior Assessment"
            subtitle="Tools and procedures for conducting comprehensive FBAs"
            items={fbaItems}
          />
          <Section
            title="Typography Library"
            subtitle="Common types of maladaptive behaviors in ABA"
            items={typographyLibrary}
          />
        </div>
      </main>

      <SimpleModal
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.title || ''}
        content={selectedItem?.content || ''}
      />
    </div>
  );
}