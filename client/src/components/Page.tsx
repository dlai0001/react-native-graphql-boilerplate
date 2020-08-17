import React, { ReactNode } from 'react'
import {SafeAreaView} from 'react-native'

const Page = ({children}: {children:ReactNode} & object) => (
    <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
        {children}
    </SafeAreaView>
)

export default Page