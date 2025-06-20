'use client';

import React, { JSX, KeyboardEvent, useEffect, useState } from 'react';
import { IRatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';
const Rating = ({
    isEditable = false,
    rating,
    seRating,
    ...props
}: IRatingProps) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
        new Array(5).fill(<></>)
    );
    useEffect(() => {
        construcRating(rating);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rating]);
    const construcRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((rat: JSX.Element, i: number) => {
            return (
                <span
                    key={i}
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.edditable]: isEditable,
                    })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onClick(i + 1)}
                >
                    <StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
                            isEditable && handleSpace(i + 1, e)
                        }
                    />
                </span>
            );
        });
        setRatingArray(updatedArray);
    };
    const changeDisplay = (i: number) => {
        if (!isEditable) return;
        construcRating(i);
    };
    const onClick = (i: number) => {
        if (!isEditable || !seRating) return;
        seRating(i);
    };
    const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
        if (e.code !== 'Space' || !seRating) {
            return;
        }
        seRating(i);
    };

    return (
        <div {...props}>
            {ratingArray.map((r, i) => (
                <span key={i}>{r}</span>
            ))}
        </div>
    );
};

export default Rating;
