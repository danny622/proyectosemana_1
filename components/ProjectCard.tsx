import { View, Text } from 'react-native';

interface ProjectCardProps {
    emoji: string;
    title: string;
    description: string;
    tags: string[];
}

export function ProjectCard({ emoji, title, description, tags }: ProjectCardProps) {
    return (
        <View className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg mb-5">

            {/* Header del proyecto */}
            <View className="flex-row items-center mb-4">
                <View className="bg-primary-100 p-3 rounded-xl mr-4">
                    <Text className="text-2xl">{emoji}</Text>
                </View>
                <Text className="text-xl font-bold text-primary-900 flex-1">{title}</Text>
            </View>

            {/* Descripción */}
            <Text className="text-base text-gray-600 mb-4 leading-6">
                {description}
            </Text>

            {/* Tags mejorados */}
            <View className="flex-row flex-wrap">
                {tags.map((tag, index) => (
                    <View
                        key={index}
                        className="bg-primary-50 border border-primary-200 rounded-full px-4 py-2 mr-2 mb-2"
                    >
                        <Text className="text-sm text-primary-700 font-semibold">{tag}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}