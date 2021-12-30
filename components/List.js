import React from 'react'
import { FlatList } from 'react-native'


export default List = props => {

    const { listData, Item, itemKey, itemProps } = props

    const finalItemProps = itemProps ? itemProps : {}

    return (
        <FlatList
            data={listData}
            renderItem={
                ({item}) => (
                    <Item 
                        itemData={item}
                        {...finalItemProps}
                        />
                )
            }
            keyExtractor={
                (item, index) => (
                    itemKey ?
                        item[itemKey] :
                        index
                )
            }
            showsVerticalScrollIndicator={false}
            {...props}
            />
    )
}