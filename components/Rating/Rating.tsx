'use client';

import React, { JSX, useEffect, useState } from 'react';
import { IRatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';
const Rating = ({
    // isEditable = false,
    rating,
    // seRating,
    ...props
}: IRatingProps) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
        new Array(5).fill(<></>)
    );

    const construcRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((rat: JSX.Element, i: number) => {
            return (
                <StarIcon
                    key={i}
                    className={cn(styles.star, {
                        [styles.fill]: i < currentRating,
                    })}
                />
            );
        });
        setRatingArray(updatedArray);
    };
    useEffect(() => {
        construcRating(rating);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rating]);

    return (
        <div {...props}>
            {ratingArray.map((r, i) => (
                <span key={i}>{r}</span>
            ))}
        </div>
    );
};

export default Rating;
