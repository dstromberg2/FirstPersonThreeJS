import World from '@/world/world'

// Additional property groupings can be added here to expand interactions
// with the raycaster or others. Undefined properties will initialize a
// new array if one does not exist, but it is safer to declare in advance

const Entities = {
    all: [],
    blocking: [],
    steps: []
}

World.forEach(function(def) {
    Entities.all.push(def)
    if (typeof def.props !== 'undefined') {
        for (const prop in def.props) {
            if (def.props.hasOwnProperty(prop) && def.props[prop] === true) {
                if (typeof Entities[prop] === 'undefined') {
                    Entities[prop] = []
                }
                Entities[prop].push(def)
            }
        }
    }
})

export default Entities
