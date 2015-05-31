package sample.fa.infractructure.user;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import javax.enterprise.context.ApplicationScoped;
import sample.fa.domain.user.User;
import sample.fa.domain.user.UserRepository;

@ApplicationScoped
public class OnMemoryUserRepository implements UserRepository {
    
    private Map<String, User> store = new ConcurrentHashMap<>();
    
    @Override
    public void register(User user) {
        this.store.put(user.getName(), user);
        System.out.println("store = " + store);
    }
}
