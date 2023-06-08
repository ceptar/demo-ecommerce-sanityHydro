import {useState} from 'react';
import {useRouter} from 'sanity/router';
import {TooltipProps} from './types';
import SpinnerIcon from '../../../../components/icons/Spinner';
// @ts-expect-error incompatibility with node16 resolution
import {ArrowRightIcon, CloseIcon} from '@sanity/icons';

export default function WalkthroughStep(props: TooltipProps) {
  const [spin, setSpin] = useState(false);
  const router = useRouter();

  return spin ? (
    <div style={{margin: 'auto'}}>
      <SpinnerIcon />
    </div>
  ) : (
    <>
      <span
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          margin: '16px',
        }}
      >
        <span
          style={{
            background: '#4E91FC',
            borderRadius: '3px',
            textTransform: 'uppercase',
            fontWeight: 600,
            fontSize: '11px',
            color: '#101112',
            letterSpacing: '0.5px',
            padding: '2px 4px',
          }}
        >
          {props.step.chapter}
        </span>
        <button {...props.closeProps}>
          <CloseIcon style={{fontSize: '1.5em', color: '#8690A0'}} />
        </button>
      </span>
      <h2
        style={{
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '21px',
          lineHeight: '27px',
          letterSpacing: '0.5PX',
          color: '#FFFFFF',
          marginBottom: '10px',
        }}
      >
        {props.step.title}
      </h2>
      <p
        style={{
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '13px',
          lineHeight: '17px',
          marginBottom: '22px',
        }}
      >
        {props.step.content}
      </p>
      <span
        style={{
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '10px',
          lineHeight: '13px',
          color: '#9EA6B3',
          alignSelf: 'flex-start',
          marginBottom: '6px',
        }}
      >
        Hit <strong>⏎ Enter</strong> to proceed
      </span>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '4px',
          marginBottom: '12px',
        }}
      >
        <div
          style={{
            borderRadius: '1.5px',
            height: '3px',
            flex: 1,
            background: '#4E91FC',
          }}
        />
        <div
          style={{
            borderRadius: '1.5px',
            height: '3px',
            flex: 1,
            background: '#17396F',
          }}
        />
        <div
          style={{
            borderRadius: '1.5px',
            height: '3px',
            flex: 1,
            background: '#17396F',
          }}
        />
      </div>
      <button
        style={{
          color: '#101112',
          background: '#FFFFFF',
          borderRadius: '3px',
          padding: '8px',
          width: '100%',
        }}
        {...props.primaryProps}
        onClick={(e) => {
          e.preventDefault();
          const {nextUrlTarget, nextUrl} = props.step;
          if (nextUrlTarget && nextUrl) {
            router.navigateUrl({path: nextUrl});
            Promise.resolve()
              .then(() => new Promise((resolve) => setTimeout(resolve, 1000)))
              .then(() => waitForElem(nextUrlTarget))
              .then(() => {
                props.primaryProps.onClick(e);
              })
              .catch(() => {
                props.closeProps.onClick(e);
              });
            setSpin(true);
          } else {
            props.primaryProps.onClick(e);
          }
        }}
      >
        Next{' '}
        <ArrowRightIcon style={{fontSize: '1.5em', paddingBottom: '1px'}} />
      </button>
    </>
  );
}

function waitForElem(selector: string) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}
