import { useMemo } from 'react';
import { useWallet, walletIdentityKey } from '@/context/WalletContext';

export function useWalletIdentityKey(): string | null {
  const { wallet } = useWallet();
  return useMemo(() => walletIdentityKey(wallet), [wallet]);
}
