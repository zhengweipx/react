/*
 * @Author: willwil
 * @Date: 2022-08-12 21:52:03
 * @LastEditors: willwil
 * @LastEditTime: 2022-08-12 23:08:41
 * @Description: 
 */
import React from "react";

const Flex = (props) => {
    const { children, direction = "row", justify = "normal", align = "normal", wrap = "nowrap", grow = 0, gutter = 0 } = props;

    const justifyMap = {
        normal: 'normal',
        start: 'flex-start',
        center: 'center',
        end: 'flex-end',
        between: 'space-between',
        around: 'space-around',
        evenly: 'space-evenly'
    };

    const alignMap = {
        normal: 'normal',
        start: 'flex-start',
        center: 'center',
        end: 'flex-end',
        baseline: 'baseline'
    };

    const propsMap = {
        display: 'flex',
        flexDirection: direction,
        flexGrow: grow,
        flexWrap: wrap,
        alignItems: alignMap[align],
        justifyContent: justifyMap[justify]
    };

    const formattItem = (item, index, gutter) => {
        if (index !== children.length - 1) {
            if (direction === 'row' || direction === 'row-reverse') {
                return React.cloneElement(item, { ...item.props, key: index, style: { ...item.props.style, marginRight: gutter } });
            } else {
                return React.cloneElement(item, { ...item.props, key: index, style: { ...item.props.style, marginBottom: gutter } });
            }
        } else {
            return item;
        }
    };

    return (
        <div style={propsMap}>
            {children && (
                children.map((item, index) => {
                    if (gutter && gutter !== '0') {
                        if (typeof gutter === 'object') {
                            return formattItem(item, index, gutter[index] || 0)
                        } else {
                            return formattItem(item, index, gutter);
                        }
                    }
                    return item;
                })
            )}
        </div>
    );
};

export default Flex;