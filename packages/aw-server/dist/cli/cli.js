"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const plink_1 = require("@wfh/plink");
const child_process_1 = require("child_process");
const path_1 = __importDefault(require("path"));
const cliExt = (program) => {
    program.command('aw:dev-start')
        .description('Start @wfh/cra-scripts dev server and API proxy server')
        // .option('-f, --file <spec>', 'sample option')
        .action(() => __awaiter(void 0, void 0, void 0, function* () {
        child_process_1.fork(path_1.default.resolve(plink_1.plinkEnv.rootDir, 'server-space/app.js'), ['-c', 'conf/devServerProxy.ts'], {
            cwd: path_1.default.join(plink_1.plinkEnv.rootDir, 'server-space')
        });
        child_process_1.fork(require.resolve('@wfh/plink/wfh/dist/cmd-bootstrap'), 'cra-start --prop @wfh/cra-scripts.openBrowser=http://localhost:14334 aw-main'.split(/\s+/), {
            cwd: path_1.default.join(plink_1.plinkEnv.rootDir, 'cra-space')
        });
    }));
    program.command('aw:demo')
        .description('Start a server for hosting existing production assets')
        .action(() => {
        child_process_1.fork(path_1.default.resolve(plink_1.plinkEnv.rootDir, 'server-space/app.js'), ['--prop', 'port=14334'], {
            cwd: path_1.default.join(plink_1.plinkEnv.rootDir, 'server-space')
        });
        child_process_1.fork(require.resolve('@wfh/plink/wfh/dist/cmd-bootstrap'), [
            'cra-open', 'http://localhost:14334'
        ], {
            cwd: path_1.default.join(plink_1.plinkEnv.rootDir, 'cra-space')
        });
    });
    // TODO: Add more sub command here
};
exports.default = cliExt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esc0NBQW9DO0FBQ3BDLGlEQUFtQztBQUNuQyxnREFBd0I7QUFFeEIsTUFBTSxNQUFNLEdBQWlCLENBQUMsT0FBTyxFQUFFLEVBQUU7SUFDdkMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7U0FDOUIsV0FBVyxDQUFDLHdEQUF3RCxDQUFDO1FBQ3RFLGdEQUFnRDtTQUMvQyxNQUFNLENBQUMsR0FBUyxFQUFFO1FBQ2pCLG9CQUFJLENBQUMsY0FBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBUSxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLHdCQUF3QixDQUFDLEVBQUU7WUFDNUYsR0FBRyxFQUFFLGNBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQVEsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDO1NBQ2pELENBQUMsQ0FBQztRQUNILG9CQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxtQ0FBbUMsQ0FBQyxFQUN2RCw4RUFBOEUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0YsR0FBRyxFQUFFLGNBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQVEsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDO1NBQzlDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztTQUN6QixXQUFXLENBQUMsdURBQXVELENBQUM7U0FDcEUsTUFBTSxDQUFDLEdBQUcsRUFBRTtRQUVYLG9CQUFJLENBQUMsY0FBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBUSxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxFQUFFO1lBQ3BGLEdBQUcsRUFBRSxjQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFRLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQztTQUNqRCxDQUFDLENBQUM7UUFDSCxvQkFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsbUNBQW1DLENBQUMsRUFBRTtZQUN6RCxVQUFVLEVBQUUsd0JBQXdCO1NBQ3JDLEVBQUU7WUFDRCxHQUFHLEVBQUUsY0FBSSxDQUFDLElBQUksQ0FBQyxnQkFBUSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUM7U0FDOUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxrQ0FBa0M7QUFDcEMsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDbGlFeHRlbnNpb259IGZyb20gJ0B3ZmgvcGxpbmsvd2ZoL2Rpc3QnO1xuaW1wb3J0IHtwbGlua0Vudn0gZnJvbSAnQHdmaC9wbGluayc7XG5pbXBvcnQge2Zvcmt9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IFBhdGggZnJvbSAncGF0aCc7XG5cbmNvbnN0IGNsaUV4dDogQ2xpRXh0ZW5zaW9uID0gKHByb2dyYW0pID0+IHtcbiAgcHJvZ3JhbS5jb21tYW5kKCdhdzpkZXYtc3RhcnQnKVxuICAuZGVzY3JpcHRpb24oJ1N0YXJ0IEB3ZmgvY3JhLXNjcmlwdHMgZGV2IHNlcnZlciBhbmQgQVBJIHByb3h5IHNlcnZlcicpXG4gIC8vIC5vcHRpb24oJy1mLCAtLWZpbGUgPHNwZWM+JywgJ3NhbXBsZSBvcHRpb24nKVxuICAuYWN0aW9uKGFzeW5jICgpID0+IHtcbiAgICBmb3JrKFBhdGgucmVzb2x2ZShwbGlua0Vudi5yb290RGlyLCAnc2VydmVyLXNwYWNlL2FwcC5qcycpLCBbJy1jJywgJ2NvbmYvZGV2U2VydmVyUHJveHkudHMnXSwge1xuICAgICAgY3dkOiBQYXRoLmpvaW4ocGxpbmtFbnYucm9vdERpciwgJ3NlcnZlci1zcGFjZScpXG4gICAgfSk7XG4gICAgZm9yayhyZXF1aXJlLnJlc29sdmUoJ0B3ZmgvcGxpbmsvd2ZoL2Rpc3QvY21kLWJvb3RzdHJhcCcpLFxuICAgICAgJ2NyYS1zdGFydCAtLXByb3AgQHdmaC9jcmEtc2NyaXB0cy5vcGVuQnJvd3Nlcj1odHRwOi8vbG9jYWxob3N0OjE0MzM0IGF3LW1haW4nLnNwbGl0KC9cXHMrLyksIHtcbiAgICAgIGN3ZDogUGF0aC5qb2luKHBsaW5rRW52LnJvb3REaXIsICdjcmEtc3BhY2UnKVxuICAgIH0pO1xuICB9KTtcblxuICBwcm9ncmFtLmNvbW1hbmQoJ2F3OmRlbW8nKVxuICAuZGVzY3JpcHRpb24oJ1N0YXJ0IGEgc2VydmVyIGZvciBob3N0aW5nIGV4aXN0aW5nIHByb2R1Y3Rpb24gYXNzZXRzJylcbiAgLmFjdGlvbigoKSA9PiB7XG5cbiAgICBmb3JrKFBhdGgucmVzb2x2ZShwbGlua0Vudi5yb290RGlyLCAnc2VydmVyLXNwYWNlL2FwcC5qcycpLCBbJy0tcHJvcCcsICdwb3J0PTE0MzM0J10sIHtcbiAgICAgIGN3ZDogUGF0aC5qb2luKHBsaW5rRW52LnJvb3REaXIsICdzZXJ2ZXItc3BhY2UnKVxuICAgIH0pO1xuICAgIGZvcmsocmVxdWlyZS5yZXNvbHZlKCdAd2ZoL3BsaW5rL3dmaC9kaXN0L2NtZC1ib290c3RyYXAnKSwgW1xuICAgICAgJ2NyYS1vcGVuJywgJ2h0dHA6Ly9sb2NhbGhvc3Q6MTQzMzQnXG4gICAgXSwge1xuICAgICAgY3dkOiBQYXRoLmpvaW4ocGxpbmtFbnYucm9vdERpciwgJ2NyYS1zcGFjZScpXG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIFRPRE86IEFkZCBtb3JlIHN1YiBjb21tYW5kIGhlcmVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsaUV4dDtcbiJdfQ==