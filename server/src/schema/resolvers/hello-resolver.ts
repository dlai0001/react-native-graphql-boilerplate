const helloResolver = {
    Query: {
        hello: (
            parent: any,
            args: { name: string },
            context: any,
            info: any
        ) => {
            return `Hello ${args.name}`
        }
    }
}

export default helloResolver