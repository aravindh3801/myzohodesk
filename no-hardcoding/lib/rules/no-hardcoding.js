

module.exports = {
    meta:{

    },
    create: function(context){
        const {methods,attributes,props} = require('../../excludes/nohardcodingRuleexcludes');


        return{
            Literal: function(node){
                let literalText = node.value
                let ancestorsOfLiteral = context.getAncestors();
                let immediateAncestorOfLiteral = ancestorsOfLiteral[ancestorsOfLiteral.length -1]
                
                let isAStringInFunctionCall = true
                let isAStringInObjectKey = true
                let isAStringInProp = true

                if(immediateAncestorOfLiteral.type === 'CallExpression'){
                    if(immediateAncestorOfLiteral.callee.type === 'MemberExpression' && methods.includes(immediateAncestorOfLiteral.callee.property.name)){
                        isAStringInFunctionCall = false
                    }
                    else if(immediateAncestorOfLiteral.callee.type === 'Identifier' && methods.includes(immediateAncestorOfLiteral.callee.name))
                    isAStringInFunctionCall = false
                }
                if(immediateAncestorOfLiteral.type === 'Property' && attributes.includes(immediateAncestorOfLiteral.key.type)){
                    isAStringInObjectKey = false
                }
                if(immediateAncestorOfLiteral.type === 'JSXAttribute' && props.includes(immediateAncestorOfLiteral.name.name)){
                    isAStringInProp = false
                }
                context.report({
                    node:node,
                    message:"Do not hardcode content. Use i18n key instead"
                })
            }
        }
    }
}