import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core/';
import Image from 'next/image';

const useStyles = makeStyles({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
  },
  rules: {
    textAlign: 'center',
  },
  footer: {
    paddingTop: '30px',
  },
});

export default function Index() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.mainContainer}>
        <Image
          src='/wz-banner.jpg'
          alt='Warzone Banner'
          layout='intrinsic'
          // objectFit='cover'
          quality={100}
          height={270}
          width={480}
        />
        <div>
          <div>
            <h1 className={classes.rules}>Rules:</h1>
            <Typography variant='h6' align='center'>
              Down Someone - Give Out 1 Drink
            </Typography>
            <Typography variant='h6' align='center'>
              Kill Them - Give Out 1 More Drink (2 total)
            </Typography>
            <Typography variant='h6' align='center'>
              Get Downed - Take a drink
            </Typography>
            <Typography variant='h6' align='center'>
              Die - Take 1 More Drink (2 total)
            </Typography>
            <Typography variant='h6' align='center'>
              Bad Call Out - Take 1 Drink
            </Typography>
            <Typography variant='h6' align='center'>
              Squad Wipe - Social (Everybody Drinks)
            </Typography>
            <Typography variant='h6' align='center'>
              Run Over Someone in a Vehicle - Give Out 2 Drinks
            </Typography>
            <Typography variant='h6' align='center'>
              Get Ran Over by a Vehicle - Take 2 Drinks
            </Typography>
            <Typography variant='h6' align='center'>
              Win Gulag - Give Out 2 Drinks
            </Typography>
            <Typography variant='h6' align='center'>
              Lose Gulag - Take 2 Drinks
            </Typography>
            <Typography variant='h6' align='center'>
              Fall to Your Death - Finish Your Drink
            </Typography>
            <Typography variant='h6' align='center'>
              Revive a teammate - Give out a Drink
            </Typography>
            <Typography variant='h6' align='center'>
              Lose Connection - Take 1 Drink
            </Typography>
            <Typography variant='h6' align='center'>
              Finish Contract - Social
            </Typography>
            <Typography variant='h6' align='center'>
              Team Loss - Social
            </Typography>
          </div>
        </div>
        <div className={classes.footer}>
          <Typography variant='subtitle2' align='center'>
            *Please Drink Responsibly*
          </Typography>
        </div>
      </div>
    </>
  );
}
