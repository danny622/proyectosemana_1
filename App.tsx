import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import { ProfileSection } from './components/ProfileSection'
import { SkillCard } from './components/SkillCard'
import { ProjectCard } from './components/ProjectCard'
import { ContactInfo as ContactInfoComponent } from './components/ContactInfo' // componente de Contacto

// ==================== INTERFACES ====================
interface ContactItem {
  icon: string
  label: string
  value: string
}

interface Skill {
  id: string
  emoji: string
  name: string
}

interface Project {
  id: string
  emoji: string
  title: string
  description: string
  tags: string[]
}

// ==================== TUS DATOS ====================
const personalInfo = {
  name: 'Danny Alejandro Gonzalez Yate',
  title: 'Analista Desarrollador de Software',
  avatar: require('./assets/responsive.jpeg'),
  bio:
    'Apasionado por la tecnología y el desarrollo de software, me encanta ver y analisar videojuegos ya que es tiene una gran similitud en base al desarrollo de software, me gusta como se ven y estudio un poco de eso ya que me apasionan desde luego, tambien me gusta crear la parte del frontend ya que me gusta estructurar el diseño y que sea actractivo para los usuarios.',
}

const contacts: ContactItem[] = [
  { icon: '📧', label: 'Email', value: 'dannygonzalezy@gmail.com' },
  { icon: '📍', label: 'Ubicación', value: 'Bogotá D.C, Colombia' },
  { icon: '🔗', label: 'GitHub', value: 'github.com/danny622' },
]

const skills: Skill[] = [
  { id: '1', emoji: '⚛️', name: 'React Native' },
  { id: '2', emoji: '🚀', name: 'React.js' },
  { id: '3', emoji: '📘', name: 'TypeScript' },
  { id: '4', emoji: '🎨', name: 'TailwindCSS' },
  { id: '5', emoji: '📱', name: 'Expo' },
  { id: '6', emoji: '💻', name: 'Node.js' },
  { id: '7', emoji: '⚙️', name: 'javascript' },
  { id: '8', emoji: '🐳', name: 'mysql' },
]

const projects: Project[] = [
  {
    id: '1',
    emoji: '👤',
    title: 'Portfolio Personal',
    description:
      'Aplicación móvil para mostrar mi perfil profesional, habilidades y proyectos realizados.',
    tags: ['React Native', 'TypeScript', 'TailwindCSS'],
  },
  {
    id: '2',
    emoji: '🏢',
    title: 'sistema de votacion',
    description:
      'software para la gestion de votacion en el colegio lo cual se hizo con varias herramientass de html, css, syql, php,',
    tags: ['React', 'Firebase', 'Docker', 'Node.js', 'TypeScript'],
  },
]

// ==================== COMPONENTE PRINCIPAL ====================
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {/* HEADER MORADITO */}
        <View className="bg-purple-700 h-48 items-center justify-center">
          <Text className="text-white text-2xl font-bold tracking-wide">
            Mi App Personal
          </Text>
          <Text className="text-purple-200 text-sm mt-1">
            Desarrollador React Native
          </Text>
        </View>

        {/* CONTENIDO PRINCIPAL */}
        <View className="px-5">
          {/* PERFIL */}
          <ProfileSection
            name={personalInfo.name}
            title={personalInfo.title}
            avatar={personalInfo.avatar}
            bio={personalInfo.bio}
          />

          {/* SEPARADOR: CONTACTO */}
          <View className="flex-row items-center justify-center my-6">
            <View className="w-16 h-px bg-gray-300" />
            <Text className="mx-4 text-purple-700 font-semibold text-center">
              Contacto
            </Text>
            <View className="w-16 h-px bg-gray-300" />
          </View>

          {/* CONTACTO */}
          <ContactInfoComponent contacts={contacts} />

          {/* SEPARADOR: HABILIDADES */}
          <View className="flex-row items-center justify-center my-6">
            <View className="w-16 h-px bg-gray-300" />
            <Text className="mx-4 text-purple-700 font-semibold text-center">
              Habilidades
            </Text>
            <View className="w-16 h-px bg-gray-300" />
          </View>

          {/* HABILIDADES */}
          <View className="mb-6">
            <View className="flex-row items-center justify-between mb-6">
              <Text className="text-2xl font-bold text-purple-900">
                💪 Mis Habilidades
              </Text>
              <Text className="text-fuchsia-700 font-semibold bg-fuchsia-50 px-3 py-1 rounded-full">
                {skills.length} skills
              </Text>
            </View>
            {skills.map((skill) => (
              <SkillCard key={skill.id} emoji={skill.emoji} name={skill.name} />
            ))}
          </View>

          {/* SEPARADOR: PROYECTOS */}
          <View className="flex-row items-center justify-center my-6">
            <View className="w-16 h-px bg-gray-300" />
            <Text className="mx-4 text-purple-700 font-semibold text-center">
              Proyectos
            </Text>
            <View className="w-16 h-px bg-gray-300" />
          </View>

          {/* PROYECTOS */}
          <View className="mb-10">
            <View className="flex-row items-center justify-between mb-6">
              <Text className="text-2xl font-bold text-purple-900">
                🚀 Mis Proyectos
              </Text>
              <Text className="text-fuchsia-700 font-semibold bg-fuchsia-50 px-3 py-1 rounded-full">
                {projects.length} proyectos
              </Text>
            </View>
            {projects.map((p) => (
              <ProjectCard
                key={p.id}
                emoji={p.emoji}
                title={p.title}
                description={p.description}
                tags={p.tags}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}