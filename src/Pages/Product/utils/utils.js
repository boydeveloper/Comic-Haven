export const noConentText =
  'Sorry, we do not have a description for this content at this time. We apologize for any inconvenience this may cause. Please check back later for updates. Thank you for your understanding';

export const splitText = (text) => {
  const desc = text.replaceAll('<br>', '').split('...$');
  const shortText = desc.join('');
  return shortText;
};
