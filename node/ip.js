module.exports = {
    address: () => {
        const interfaces = require('os').networkInterfaces()

        const ip = []

        for (let devName in interfaces) {
            const iface = interfaces[devName]

            for (let i = 0; i < iface.length; i++) {
                const alias = iface[i]

                if (alias.family === 'IPv4' && !alias.internal) ip.push(alias.address)
            }
        }

        return ip
    },
}
