import { Text, View } from "react-native"

type Props = {
    title: string
}

const Title = ({title}: Props) => {
  return (
        <Text className='text-3xl text-white text-center border-2 font-bold border-white m-3 p-3'>
            {title}
        </Text>
  )
}

export default Title