"use strict";

const Product = React.createClass({
        displayName: "Product",

        propTypes: {
            thead: React.PropTypes.arrayOf(React.PropTypes.shape({
                code: React.PropTypes.number.isRequired,
                text: React.PropTypes.string.isRequired
            })),

            data: React.PropTypes.arrayOf(
                React.PropTypes.shape({
                    code: React.PropTypes.number.isRequired,
                    name: React.PropTypes.string.isRequired,
                    price: React.PropTypes.number.isRequired,
                    url: React.PropTypes.string.isRequired,
                    count: React.PropTypes.number.isRequired
                })),
        },

        render: function () {
            let theadData = this.props.thead.map(d =>
                React.DOM.td({key: d.code}, d.text)
            );

            let productData = this.props.data.map(d =>
                React.DOM.tr({key: d.code},
                    React.DOM.td({className: "Name"}, d.name),
                    React.DOM.td({className: "Price"}, d.price),
                    React.DOM.td({className: "Photo"},
                        React.DOM.img({src: d.url})),
                    React.DOM.td({className: "Count"}, d.count)));

            return React.DOM.table(null,
                React.DOM.thead(null,
                    React.DOM.tr(null, theadData)),
                React.DOM.tbody(null, productData)
            );

        },
    })
;