import './button.scss';

export interface ButtonProps {
  type: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const createButton = (props: ButtonProps) => {

  // create Element
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = props.label;
  btn.addEventListener('click', props.onClick);

  // add classes
  const btnTypes = `btn btn-${props.type || 'primary'} `;

  let btnSize = '';
  if (props.size) {
    btnSize = `btn-${props.size === 'large' ? 'lg' : props.size === 'small' ? 'sm' : ''}`;
  }
  btn.className = [btnTypes, btnSize].join('');

  return btn;
};
