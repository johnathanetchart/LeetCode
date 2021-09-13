class Solution {
    public boolean containsDuplicate(int[] nums) {
        Arrays.sort(nums);
        HashSet<Integer> hash = new HashSet(20);
        for(int i = 0; i < nums.length; i++) {
            hash.add(nums[i]);
        }
        // System.out.println(hash.size());
        if(hash.size() != nums.length) {
            return true;
        }
        
        // List<Integer> listWithoutDuplicates = new ArrayList<>(new HashSet<>(nums));
        // System.out.println(Arrays.toString(nums));
        // for(int i = 1; i < nums.length; i++) {
        //     if(nums[i] == nums[i - 1]) {
        //         return true;
        //     }
        // }
        return false;
    }
}