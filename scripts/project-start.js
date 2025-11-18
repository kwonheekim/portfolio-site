#!/usr/bin/env node

/**
 * ============================================
 * Project Start - Smart Build & Validation
 * ============================================
 *
 * 전체 흐름:
 * 1️⃣ 빌드 → 2️⃣ 검증 → 3️⃣ 오류 없으면 로컬 실행
 *                     ↓ 오류 발견
 *                     오류 보고
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

// 색상 정의
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

// 로깅 함수
function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logSection(title) {
  log('\n' + '='.repeat(50), 'cyan');
  log(title, 'bright');
  log('='.repeat(50) + '\n', 'cyan');
}

function logSuccess(message) {
  log(`✓ ${message}`, 'green');
}

function logError(message) {
  log(`✗ ${message}`, 'red');
}

function logInfo(message) {
  log(`ℹ ${message}`, 'blue');
}

// 프로젝트 루트 디렉토리
const projectRoot = path.join(__dirname, '..');

// 명령어 실행 (동기)
function executeCommand(command, options = {}) {
  try {
    logInfo(`Running: ${command}`);
    const result = execSync(command, {
      cwd: projectRoot,
      encoding: 'utf8',
      stdio: options.stdio || 'pipe',
      ...options,
    });
    return { success: true, output: result };
  } catch (error) {
    return { success: false, output: error.stdout || '', error: error.message };
  }
}

// 명령어 실행 (비동기 - 개발 서버용)
function executeCommandAsync(command) {
  return new Promise((resolve) => {
    logInfo(`Running: ${command}`);
    const child = spawn(command, {
      shell: true,
      cwd: projectRoot,
      stdio: 'inherit',
    });

    child.on('exit', (code) => {
      resolve(code === 0);
    });
  });
}

// ============================================
// 1️⃣ 빌드 단계
// ============================================

async function buildProject() {
  logSection('📦 빌드 단계');

  // yarn build
  logInfo('프로젝트 빌드 시작...');
  const buildResult = executeCommand('yarn build', { stdio: 'inherit' });

  if (!buildResult.success) {
    logError('빌드 실패. 의존성 재설치 후 재시도...');

    // 자동 재시도
    const retryInstallResult = executeCommand('yarn install', { stdio: 'inherit' });
    if (!retryInstallResult.success) {
      logError('의존성 재설치 실패');
      return false;
    }

    const retryBuildResult = executeCommand('yarn build', { stdio: 'inherit' });
    if (!retryBuildResult.success) {
      logError('재빌드 실패');
      return false;
    }

    logSuccess('재빌드 성공');
  } else {
    logSuccess('빌드 성공');
  }

  return true;
}

// ============================================
// 2️⃣ 검증 단계
// ============================================

async function validateProject() {
  logSection('🔍 검증 단계');

  logInfo('TypeScript 타입 체크 수행...');

  // TypeScript 타입 체크
  const typeCheckResult = executeCommand('npx tsc --noEmit', { stdio: 'pipe' });

  if (!typeCheckResult.success) {
    logError('TypeScript 타입 에러 발견!');
    logInfo('에러 내용:');
    console.log(typeCheckResult.output);
    return { isValid: false, errors: typeCheckResult.output };
  }

  logSuccess('TypeScript 타입 검사 통과');

  return { isValid: true, errors: null };
}

// ============================================
// 3️⃣ 오류 보고
// ============================================

function reportErrors(errors) {
  logSection('📋 오류 보고서');

  logError('다음과 같은 오류가 발견되었습니다:');
  console.log(errors);

  logInfo('\n해결 방법:');
  logInfo('1. 오류 메시지를 확인하세요');
  logInfo('2. 해당 파일을 수정하세요');
  logInfo('3. /project-start를 다시 실행하세요');
}

// ============================================
// 4️⃣ 로컬 실행 단계
// ============================================

async function startDevServer() {
  logSection('🚀 개발 서버 시작');

  logInfo('http://localhost:3000 에서 개발 서버가 시작됩니다...');
  logInfo('Ctrl+C 를 눌러 종료할 수 있습니다.');

  await executeCommandAsync('yarn dev');
}

// ============================================
// 메인 실행 루프
// ============================================

async function main() {
  logSection('🎯 Project Start - Smart Build & Validation');

  // 현재 시간 표시
  const now = new Date().toLocaleString('ko-KR');
  logInfo(`시작 시간: ${now}`);

  try {
    // 1️⃣ 빌드
    const buildSuccess = await buildProject();
    if (!buildSuccess) {
      logError('\n빌드 실패. 실행을 중단합니다.');
      process.exit(1);
    }

    // 2️⃣ 검증
    const validationResult = await validateProject();

    if (!validationResult.isValid) {
      // 3️⃣ 오류 보고
      reportErrors(validationResult.errors);
      logError('\n검증 실패. 오류를 수정한 후 다시 실행하세요.');
      process.exit(1);
    }

    logSuccess('\n✓ 모든 검증 통과!');

    // 4️⃣ 로컬 실행
    await startDevServer();
  } catch (error) {
    logError('\n예상치 못한 오류가 발생했습니다:');
    console.error(error);
    process.exit(1);
  }
}

// 실행
main();
