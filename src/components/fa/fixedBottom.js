Component({
    externalClasses: ['mask-class', 'container-class'],
    properties: {},
    methods: {
        // 计算是否需为iphonex 自动留出空间
    }
    render() {
        const { children } = this.props
        return <View style={styles.fixedBottom}>
            {children}
        </View>
    }
});
