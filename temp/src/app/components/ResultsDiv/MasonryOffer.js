import React from 'react';
import Masonry from 'react-masonry-component';
import OfferCard from './OfferCard';

const masonryOptions = {
    transitionDuration: 0
};

class MasonryOffer extends React.Component {


    render() {


        const childCards = this.props.items.map((item) => {
            return (
               <OfferCard key={item.id}
                           header={item.header}
                           body={item.body}

                />
            );
        });

        return (
            <Masonry
                className={'masonryContainer'} // default ''
                elementType={'div'} // ul default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            >
                 {childCards}

            </Masonry>

        );
    }
}

module.exports = MasonryOffer;