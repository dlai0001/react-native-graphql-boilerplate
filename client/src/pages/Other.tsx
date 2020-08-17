import { useNavigation } from '@react-navigation/native'
import { Button, Text } from '@ui-kitten/components'
import React from 'react'
import Page from '../components/Page'

const Other = () => {
    const navigation = useNavigation()

    return (
        <Page>
            <Text>Other page</Text>
            <Button onPress={() => navigation.navigate('Home')}>Go Home</Button>
        </Page>
    )
}

export default Other