import { View, Text } from 'react-native';

interface ContactInfoProps {
    contacts: Array<{
        icon: string;
        label: string;
        value: string;
    }>;
}

export function ContactInfo({ contacts }: ContactInfoProps) {
    return (
        <View className="mb-6">
            {/* Título y contador */}
            <View className="items-center mb-6">
                <Text className="text-2xl font-bold text-primary-900 text-center">
                    📞 Información de Contacto
                </Text>
                <Text className="text-accent-600 font-semibold bg-accent-50 px-3 py-1 rounded-full mt-2">
                    {contacts.length} contactos
                </Text>
            </View>

            {/* Tarjeta de contactos */}
            <View className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
                {contacts.map((contact, index) => (
                    <View 
                        key={index} 
                        className={`flex-row items-center py-3 ${
                            index < contacts.length - 1 ? 'border-b border-gray-100' : ''
                        }`}
                    >
                        <Text className="text-2xl mr-4 text-primary-600">{contact.icon}</Text>
                        <View className="flex-1">
                            <Text className="text-sm text-gray-500 font-medium">
                                {contact.label}
                            </Text>
                            <Text className="text-base text-gray-900 font-semibold">
                                {contact.value}
                            </Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
}