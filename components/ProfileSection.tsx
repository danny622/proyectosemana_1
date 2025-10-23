import { View, Text, Image } from 'react-native';

interface ProfileSectionProps {
    name: string;
    title: string;
    avatar: any; // Cambiado a any para aceptar el resultado de require()
    bio: string;
}

export function ProfileSection({ name, title, avatar, bio }: ProfileSectionProps) {
    return (
        <View className="items-center mb-8">
            {/* Avatar */}
            <View className="items-center -mt-8 mb-6">
                <View className="relative">
                    <Image
                        source={avatar}
                        className="w-32 h-32 rounded-full border-4 border-white shadow-xl"
                    />
                    {/* Punto de estado */}
                    <View className="absolute bottom-2 right-2 w-4 h-4 bg-accent-500 border-2 border-white rounded-full" />
                </View>
            </View>

            {/* Nombre y título */}
            <View className="items-center mb-6">
                <Text className="text-3xl font-bold text-primary-900 text-center mb-2">
                    {name}
                </Text>
                <View className="bg-primary-100 px-4 py-2 rounded-full">
                    <Text className="text-primary-700 font-semibold text-center">
                        {title}
                    </Text>
                </View>
            </View>

            {/* Biografía */}
            <View className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg w-full">
                <View className="flex-row items-center mb-4">
                    <Text className="text-xl font-bold text-primary-900 flex-1">👋 Sobre Mí</Text>
                    <View className="w-6 h-1 bg-accent-500 rounded-full" />
                </View>
                <Text className="text-base text-gray-700 leading-7">
                    {bio}
                </Text>
            </View>
        </View>
    );
}