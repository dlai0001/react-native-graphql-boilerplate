import React, { ReactNode } from 'react'
import {SafeAreaView} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const Page = ({children}: {children:ReactNode} & object) => (
    <SafeAreaView style={{ flex: 1, flexDirection: 'column', alignItems: 'center', height: '100%', padding: 0 }}>
        <ScrollView style={{maxWidth: 800, height: '100%', padding: 32}}>
            {children}
        </ScrollView>
    </SafeAreaView>
)

export default Page