export const teamLogos: Record<string, string> = {
  CSK:  'https://scores.iplt20.com/ipl/teamlogos/CSK.png',
  MI:   'https://scores.iplt20.com/ipl/teamlogos/MI.png',
  RCB:  'https://scores.iplt20.com/ipl/teamlogos/RCB.png',
  KKR:  'https://scores.iplt20.com/ipl/teamlogos/KKR.png',
  RR:   'https://scores.iplt20.com/ipl/teamlogos/RR.png',
  SRH:  'https://scores.iplt20.com/ipl/teamlogos/SRH.png',
  DC:   'https://scores.iplt20.com/ipl/teamlogos/DC.png',
  PBKS: 'https://scores.iplt20.com/ipl/teamlogos/PBKS.png',
  GT:   'https://scores.iplt20.com/ipl/teamlogos/GT.png',
  LSG:  'https://scores.iplt20.com/ipl/teamlogos/LSG.png',
};

export const teamColors: Record<string, { primary: string; secondary: string }> = {
  CSK:  { primary: '#f9c31c', secondary: '#00529b' },
  MI:   { primary: '#004ba0', secondary: '#d4af37' },
  RCB:  { primary: '#d4161c', secondary: '#000000' },
  KKR:  { primary: '#3a177c', secondary: '#d4af37' },
  RR:   { primary: '#ea1f8a', secondary: '#254aa5' },
  SRH:  { primary: '#f7810a', secondary: '#000000' },
  DC:   { primary: '#0078bc', secondary: '#ef1b23' },
  PBKS: { primary: '#c8102e', secondary: '#a7a9ac' },
  GT:   { primary: '#1c1c1c', secondary: '#d4af37' },
  LSG:  { primary: '#a0c4e2', secondary: '#0057a8' },
};

export const playerPhotos: Record<string, string> = {
  'MS Dhoni':         'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316700/316741.jpg',
  'Ruturaj Gaikwad':  'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316700/316748.jpg',
  'Ravindra Jadeja':  'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316700/316728.jpg',
  'Rohit Sharma':     'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316700/316736.jpg',
  'Jasprit Bumrah':   'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316700/316719.jpg',
  'Suryakumar Yadav': 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316700/316742.jpg',
  'Hardik Pandya':    'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316700/316726.jpg',
  'Virat Kohli':      'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316700/316730.jpg',
  'Faf du Plessis':   'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316700/316724.jpg',
  'Glenn Maxwell':    'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316700/316725.jpg',
  'Shreyas Iyer':     'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316700/316740.jpg',
  'Andre Russell':    'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316700/316716.jpg',
  'Sanju Samson':     'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316700/316737.jpg',
  'Jos Buttler':      'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316700/316720.jpg',
  'Rashid Khan':      'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316700/316734.jpg',
  'Pat Cummins':      'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316700/316733.jpg',
  'KL Rahul':         'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316700/316731.jpg',
  'Shubman Gill':     'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316700/316739.jpg',
  'Mohammed Shami':   'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316700/316732.jpg',
  'Axar Patel':       'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316700/316717.jpg',
  'Sunil Narine':     'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316700/316743.jpg',
};

export function getPlayerPhoto(name: string): string | null {
  return playerPhotos[name] || null;
}

export function getTeamLogo(sName: string): string | null {
  return teamLogos[sName] || null;
}