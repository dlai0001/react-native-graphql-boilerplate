import { gql, useQuery } from '@apollo/client'
import { Input, Text, Button } from '@ui-kitten/components'
import React, { useState } from 'react'
import { View } from 'react-native'
import Page from '../components/Page'
import {useNavigation} from '@react-navigation/native'

const helloQuery = gql`
    query HelloQuery($name: String!) {
        hello(name: $name)
    }
`

const HomeScreen = () => {
    const [name, setName] = useState<string>('')
    const { data, loading } = useQuery(helloQuery, { variables: { name } })
    const navigation = useNavigation()

    const handleTextChange = (text: string) => {
        setName(text)
    }

    return (
        <Page>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>Name:</Text>
                <Input placeholder="ex: David" onChangeText={handleTextChange} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>Greeting:</Text>
                <Text>{loading ? 'Loading...' : data.hello}</Text>
            </View>
            <Button onPress={() => navigation.navigate('Other')}>Go Other</Button>
        </Page>
    )
}

export default HomeScreen