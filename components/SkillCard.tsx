import { View, Text } from 'react-native';

interface SkillCardProps {
    emoji: string;
    name: string;
}

export function SkillCard({ emoji, name }: SkillCardProps) {
    return (
        <View className="bg-white rounded-xl p-4 mb-3 flex-row items-center border border-gray-100 shadow-sm">
            <Text className="text-2xl mr-4">{emoji}</Text>
            <View className="flex-1">
                <Text className="text-lg font-semibold text-primary-900">{name}</Text>
            </View>
            <View className="w-2 h-2 bg-accent-500 rounded-full" />
        </View>
    );
}