import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

interface IconProps {
    color: string;
    size: number;
}

export const CircleInfoIcon = (props: IconProps) => (
    <AntDesign name="infocirlce" size={props.size} color={props.color} />
)

export const HomeIcon = (props: IconProps) => (
    <Entypo name="home" size={props.size} color={props.color} />
)

export const InfoIcon = (props: IconProps) => (
    <FontAwesome name="info" size={props.size} color={props.color} />
)

export const OptionsIcon = (props: IconProps) => (
    <Ionicons name="options" size={props.size} color={props.color} />
)

export const UserIcon = (props: IconProps) => (
    <AntDesign name="user" size={props.size} color={props.color} />
)
