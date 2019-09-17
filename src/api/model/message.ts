export interface Message {
  id: string;
  body: string;
  type: string;
  mimetype?:string;
  t: number;
  notifyName: string;
  from: string;
  to: string;
  self: string;
  ack: number;
  invis: boolean;
  isNewMsg: boolean;
  star: boolean;
  recvFresh: boolean;
  broadcast: boolean;
  isForwarded: boolean;
  labels: any[];
  sender: {
    id: string;
    name: string;
    shortName: string;
    pushname: string;
    type: string;
    plaintextDisabled: boolean;
    isBusiness: boolean;
    isEnterprise: boolean;
    statusMute: boolean;
    labels: any[];
    formattedName: string;
    isMe: boolean;
    isMyContact: boolean;
    isPSA: boolean;
    isUser: boolean;
    isWAContact: boolean;
    profilePicThumbObj: {
      eurl: string;
      id: string;
      img: string;
      imgFull: string;
      raw: any;
      tag: string;
    };
    msgs: any;
  };
  timestamp: number;
  content: string;
  isGroupMsg: boolean;
  isMMS: boolean;
  isMedia: boolean;
  isNotification: boolean;
  isPSA: boolean;
  chat: {
    id: string;
    pendingMsgs: boolean;
    lastReceivedKey: {
      fromMe: boolean;
      remote: string;
      id: string;
      _serialized: string;
    };
    t: number;
    unreadCount: number;
    archive: boolean;
    isReadOnly: boolean;
    modifyTag: number;
    muteExpiration: number;
    name: string;
    notSpam: boolean;
    pin: number;
    msgs: any;
    kind: string;
    isGroup: boolean;
    contact: {
      id: string;
      name: string;
      shortName: string;
      pushname: string;
      type: string;
      plaintextDisabled: boolean;
      isBusiness: boolean;
      isEnterprise: boolean;
      statusMute: boolean;
      labels: any[];
      formattedName: string;
      isMe: boolean;
      isMyContact: boolean;
      isPSA: boolean;
      isUser: boolean;
      isWAContact: boolean;
      profilePicThumbObj: any[];
      msgs: any;
    };
    groupMetadata: any;
    presence: { id: string; chatstates: any[] };
  };
  chatId: string;
  quotedMsgObj: any;
  mediaData: {};
}
