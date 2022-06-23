import { Text } from '@chakra-ui/react';
import * as React from 'react';

interface copyRightProps {
  CopyrightLabel: string;
}

type Props = copyRightProps;

const Copyright: React.FC<Props> = props => <Text>{props.CopyrightLabel}</Text>;

export default Copyright;
