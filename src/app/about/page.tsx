import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from '@/components/Link';
import Button from '@mui/material/Button';

export default function About() {
  return (
    <Container maxWidth="md">
      <Box sx={{ pt: 14, pb: 10 }}>
        {/* コンセプト画像 */}
        <Box sx={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', overflow: 'hidden', mb: 6 }}>
          <Image
            src="/conceptpage/concept-bg.png"
            alt="Lumie concept"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </Box>

        {/* ブランド名 */}
        <Typography variant="accentDisplay" sx={{ textAlign: 'center', mb: 4 }}>
          Lumie
        </Typography>

        {/* コンセプトテキスト */}
        <Box sx={{ maxWidth: 600, mx: 'auto', textAlign: 'center' }}>
          <Typography variant="body1" sx={{ mb: 3, lineHeight: 2 }}>
            LUMIEは、フェミニン・ストリート・フォーマルをミックスし、<br />
            日常を少し特別に感じられる服を提案するファッションブランド。
          </Typography>
          <Typography variant="body1" sx={{ mb: 6, lineHeight: 2 }}>
            普通の日を特別な気分で過ごすためのスタイルを届けます。
          </Typography>
        </Box>

        {/* ホームへ戻るボタン */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="outlined" component={Link} href="/">
            Back to Home
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
